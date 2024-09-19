import React, { useState } from 'react';
import "./FormBooking.scss"

export const FormBooking = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep(prevStep => prevStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep(prevStep => prevStep - 1);
    };

    const handleSubmit = () => {
        // Logic submit form or redirect to thank you page
        setCurrentStep(4); // Assuming step 4 is the thank you page
    };

    return (
        <div className="form-booking container">
            <h3 className='title'>Enter the information on booking form to connect to us !!!</h3>
            <form id="progress-form" className="p-4 progress-form" action="https://httpbin.org/post" lang="en" novalidate>
                <div className="d-flex align-items-start mb-3 sm:mb-5 progress-form__tabs" role="tablist">
                    <button
                        id="progress-form__tab-1"
                        className={`flex-1 px-0 pt-2 progress-form__tabs-item ${currentStep === 1 ? 'active' : ''}`}
                        type="button"
                        role="tab"
                        aria-controls="progress-form__panel-1"
                        aria-selected={currentStep === 1}
                        onClick={() => setCurrentStep(1)}
                    >
                        <span className="d-block step" aria-hidden="true">Step 1 <span className="sm:d-none">of 3</span></span>
                        Details
                    </button>
                    <button
                        id="progress-form__tab-2"
                        className={`flex-1 px-0 pt-2 progress-form__tabs-item ${currentStep === 2 ? 'active' : ''}`}
                        type="button"
                        role="tab"
                        aria-controls="progress-form__panel-2"
                        aria-selected={currentStep === 2}
                        onClick={() => setCurrentStep(2)}
                        disabled={currentStep < 2}
                    >
                        <span className="d-block step" aria-hidden="true">Step 2 <span className="sm:d-none">of 3</span></span>
                        Shipping
                    </button>
                    <button
                        id="progress-form__tab-3"
                        className={`flex-1 px-0 pt-2 progress-form__tabs-item ${currentStep === 3 ? 'active' : ''}`}
                        type="button"
                        role="tab"
                        aria-controls="progress-form__panel-3"
                        aria-selected={currentStep === 3}
                        onClick={() => setCurrentStep(3)}
                        disabled={currentStep < 3}
                    >
                        <span className="d-block step" aria-hidden="true">Step 3 <span className="sm:d-none">of 3</span></span>
                        Survey
                    </button>
                </div>

                <section id="progress-form__panel-1" role="tabpanel" aria-labelledby="progress-form__tab-1" tabIndex="0" hidden={currentStep !== 1}>
                    <div className="sm:d-grid sm:grid-col-2 sm:mt-3">
                        <div className="mt-3 sm:mt-0 form__field">
                            <label htmlFor="first-name">
                                First name
                                <span data-required="true" aria-hidden="true"></span>
                            </label>
                            <input id="first-name" type="text" name="first-name" autoComplete="given-name" required />
                        </div>

                        <div className="mt-3 sm:mt-0 form__field">
                            <label htmlFor="last-name">
                                Last name
                                <span data-required="true" aria-hidden="true"></span>
                            </label>
                            <input id="last-name" type="text" name="last-name" autoComplete="family-name" required />
                        </div>
                    </div>

                    <div className="mt-3 form__field">
                        <label htmlFor="email-address">
                            Email address
                            <span data-required="true" aria-hidden="true"></span>
                        </label>
                        <input id="email-address" type="email" name="email-address" autoComplete="email" inputMode="email" required />
                    </div>

                    <div className="mt-1 form__field">
                        <label className="form__choice-wrapper">
                            <input id="email-newsletter" type="checkbox" name="email-newsletter" value="Yes" defaultChecked />
                            <span>Yes, I would like to sign up to receive the newsletter</span>
                        </label>
                    </div>

                    <div className="mt-3 form__field">
                        <label htmlFor="phone-number">
                            Phone number (optional)
                        </label>
                        <input id="phone-number" type="tel" name="phone-number" autoComplete="tel" inputMode="tel" />
                    </div>

                    <div className="d-flex align-items-center justify-center sm:justify-end mt-4 sm:mt-5">
                        <button type="button" data-action="next" onClick={handleNext}>
                            Continue
                        </button>
                    </div>
                </section>

                <section id="progress-form__panel-2" role="tabpanel" aria-labelledby="progress-form__tab-2" tabIndex="0" hidden={currentStep !== 2}>
                    <div className="mt-3 form__field">
                        <label htmlFor="address">
                            Address
                            <span data-required="true" aria-hidden="true"></span>
                        </label>
                        <input id="address" type="text" name="address" autoComplete="shipping address-line1" required />
                    </div>

                    <div className="mt-3 form__field">
                        <label htmlFor="address-2">
                            Apartment or suite (optional)
                        </label>
                        <input id="address-2" type="text" name="address-2" autoComplete="shipping address-line2" />
                    </div>

                    <div className="sm:d-grid sm:grid-col-3 sm:mt-3">
                        <div className="mt-3 sm:mt-0 form__field">
                            <label htmlFor="address-city">
                                City
                                <span data-required="true" aria-hidden="true"></span>
                            </label>
                            <input id="address-city" type="text" name="address-city" autoComplete="shipping address-level2" required />
                        </div>

                        <div className="mt-3 sm:mt-0 form__field">
                            <label htmlFor="address-state">
                                State
                                <span data-required="true" aria-hidden="true"></span>
                            </label>
                            <select id="address-state" name="address-state" autoComplete="shipping address-level1" required>
                                <option value="" disabled selected>Please select</option>
                                {/* Add options here */}
                            </select>
                        </div>

                        <div className="mt-3 sm:mt-0 form__field">
                            <label htmlFor="address-zip">
                                Postal code
                                <span data-required="true" aria-hidden="true"></span>
                            </label>
                            <input id="address-zip" type="text" name="address-zip" autoComplete="shipping postal-code" inputMode="numeric" required />
                        </div>
                    </div>

                    <div className="d-flex flex-column-reverse sm:flex-row align-items-center justify-center sm:justify-end mt-4 sm:mt-5">
                        <button type="button" className="mt-1 sm:mt-0 button--simple" data-action="prev" onClick={handlePrev}>
                            Back
                        </button>
                        <button type="button" data-action="next" onClick={handleNext}>
                            Continue
                        </button>
                    </div>
                </section>

                <section id="progress-form__panel-3" role="tabpanel" aria-labelledby="progress-form__tab-3" tabIndex="0" hidden={currentStep !== 3}>
                    <div className="mt-3 form__field">
                        <label htmlFor="product-satisfaction">
                            How would you rate your level of satisfaction with the service you received?
                            <span data-required="true" aria-hidden="true"></span>
                        </label>
                        <select id="product-satisfaction" name="product-satisfaction" required>
                            <option value="" disabled selected>Please select</option>
                            <option value="Highly satisfied">Highly satisfied</option>
                            <option value="Very satisfied">Very satisfied</option>
                            <option value="Satisfied">Satisfied</option>
                            <option value="Very dissatisfied">Very dissatisfied</option>
                            <option value="Highly dissatisfied">Highly dissatisfied</option>
                        </select>
                    </div>
                    <div className="mt-3 form__field">
                        <label htmlFor="product-recommendation">
                            How likely are you to recommend our products to friends or family?
                            <span data-required="true" aria-hidden="true"></span>
                        </label>
                        <select id="product-recommendation" name="product-recommendation" required>
                            <option value="" disabled selected>Please select</option>
                            <option value="Highly likely">Highly likely</option>
                            <option value="Very likely">Very likely</option>
                            <option value="Likely">Likely</option>
                            <option value="Very unlikely">Very unlikely</option>
                            <option value="Highly unlikely">Highly unlikely</option>
                        </select>
                    </div>

                    <fieldset id="product-purchase" className="mt-3 form__field">
                        <legend>
                            Which of the following products have you purchased in the past 6 months? Please check all that apply.
                        </legend>
                        <label className="form__choice-wrapper">
                            <input type="checkbox" name="product-purchase" value="A" />
                            <span>Product A</span>
                        </label>
                        <label className="form__choice-wrapper">
                            <input type="checkbox" name="product-purchase" value="B" />
                            <span>Product B</span>
                        </label>
                        <label className="form__choice-wrapper">
                            <input type="checkbox" name="product-purchase" value="C" />
                            <span>Product C</span>
                        </label>
                    </fieldset>

                    <div className="mt-3 form__field">
                        <label htmlFor="product-feedback">
                            Do you have any additional feedback or comments about our products?
                        </label>
                        <textarea id="product-feedback" name="product-feedback" rows="5"></textarea>
                    </div>

                    <div className="d-flex flex-column-reverse sm:flex-row align-items-center justify-center sm:justify-end mt-4 sm:mt-5">
                        <button type="button" className="mt-1 sm:mt-0 button--simple" data-action="prev" onClick={handlePrev}>
                            Back
                        </button>
                        <button type="button" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </section>

                <section id="progress-form__thank-you" hidden={currentStep !== 4}>
                    <p>Thank you for your submission!</p>
                    <p>We appreciate you contacting us. One of our team members will get back to you very&nbsp;soon.</p>
                </section>
            </form>
        </div>
    );
};
