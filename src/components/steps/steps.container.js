import { useState, useEffect, useCallback } from 'preact/hooks';

import { STEPS, DEFAULT_TIMEOUT_MS } from '../../core/constants/basic';

import Steps from './steps.presentation';

/*
  0 -- floating button
  1 -- floating button with popup
  2 -- help me options
  3 -- help me results
*/
const StepsContainer = () => {
  const [step, setStep] = useState(STEPS.FLOATING_BUTTON);
  const [timeoutId, setTimeoutId] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (step === STEPS.FLOATING_BUTTON) {
        setStep(STEPS.FLOATING_BUTTON_WITH_POPUP);
      }
    }, DEFAULT_TIMEOUT_MS);

    setTimeoutId(timeoutId);

    return () => timeoutId && clearTimeout(timeoutId);
  }, []);

  const setNextStep = useCallback(
    nextStep => {
      setStep(nextStep);

      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(0);
      }
    },
    [timeoutId],
  );

  return <Steps step={step} setStep={setNextStep} />;
};

export default StepsContainer;
