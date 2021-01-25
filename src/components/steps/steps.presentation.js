import { STEPS } from '../../core/constants/basic';
import { FloatingButton } from '../floating-button';
import { Popup } from '../popup';
import { Options } from '../options';

const Steps = ({ step, setStep }) => (
  <>
    {step === STEPS.FLOATING_BUTTON_WITH_POPUP && <Popup />}
    {(step === STEPS.FLOATING_BUTTON || step === STEPS.FLOATING_BUTTON_WITH_POPUP) && (
      <FloatingButton onClick={() => setStep(STEPS.OPTIONS_SELECTION)} />
    )}
    {step === STEPS.OPTIONS_SELECTION && <Options handleClose={() => setStep(STEPS.FLOATING_BUTTON)} />}
  </>
);

export default Steps;
