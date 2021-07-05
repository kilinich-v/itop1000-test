import { useEffect, useState, useCallback } from 'react';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import styles from './Timer.module.css';

const Timer = () => {
  const [timerSec, setTimerSec] = useState(0);
  const [timerStatus, setTimerStatus] = useState('stop');
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const timer = new Subject();
    interval(1000)
      .pipe(takeUntil(timer))
      .subscribe(() => {
        if (timerStatus === 'run') {
          setTimerSec(time => time + 1000);
        }
      });

    return () => {
      timer.next();
      timer.complete();
    };
  }, [timerStatus]);

  const start = useCallback(() => {
    setTimerStatus('run');
  }, []);

  const stop = useCallback(() => {
    setTimerStatus('stop');
    setTimerSec(0);
  }, []);

  const reset = useCallback(() => {
    setTimerSec(0);
  }, []);

  const wait = useCallback(() => {
    let singleClickTimer;

    setClickCount(prevClickCount => prevClickCount + 1);

    if (clickCount === 0) {
      singleClickTimer = setTimeout(function () {
        setClickCount(0);
      }, 300);
    }

    if (clickCount === 1) {
      setTimerStatus('wait');

      clearTimeout(singleClickTimer);
      setClickCount(0);
    }

    console.log(clickCount);
  }, [clickCount]);

  return (
    <div className={styles.timer}>
      <span> {new Date(timerSec).toISOString().slice(11, 19)}</span>
      <div>
        {timerStatus === 'run' ? (
          <button className='stop-button' onClick={stop}>
            Stop
          </button>
        ) : (
          <button className='start-button' onClick={start}>
            Start
          </button>
        )}
        <button onClick={reset}>Reset</button>
        <button onClick={wait}>Wait</button>
      </div>
    </div>
  );
};

export default Timer;
