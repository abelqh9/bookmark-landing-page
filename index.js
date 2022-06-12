const d = document;

// ----------------- For the features -----------------

const $featuresList = d.querySelector('[data-featuresList]');
const $featuresLis = d.querySelectorAll('[data-featuresList]  [data-feature]');

$featuresLis.forEach( $featureLi => {
    $featureLi.addEventListener('click', e => {
        const $featureLiActive = $featuresList.querySelector('.features__li--active');
        const $nextFeatureLiActive = $featuresList.querySelector(`[data-feature = "${$featureLi.dataset.feature}"]`);
        const $featureVisible = d.querySelector('.feature--visible')
        const $nextFeatureVisible = d.querySelector(`.feature[data-feature="${$featureLi.dataset.feature}"]`)

        if ($featureLiActive === $nextFeatureLiActive) return;

        $featureVisible.className = 'feature';
        $nextFeatureVisible.className = 'feature--visible';

        // for mobile
        $featureLiActive.className = 'features__li';
        $nextFeatureLiActive.className = 'features__li--active';

        // for desktop
        let nextfeaturesListClass;
        if ($featureLi.dataset.feature == 0) nextfeaturesListClass = 'features__ul--first';
        if ($featureLi.dataset.feature == 1) nextfeaturesListClass = 'features__ul--second';
        if ($featureLi.dataset.feature == 2) nextfeaturesListClass = 'features__ul--third';
        $featuresList.className = nextfeaturesListClass;
    })
});

// ----------------- For the questions -----------------

const $questions = d.querySelectorAll('.question');

$questions.forEach($question => {
    $question.addEventListener('click', e => {
        const $questionImg = $question.querySelector('img');

        if ($question.classList.contains('question')) {
            $question.className = 'question--active';
            $questionImg.className = 'question__img--active';
        }else{
            $question.className = 'question';
            $questionImg.className = 'question__img';
        }
    })
});

// ----------------- For the nav modal -----------------

const $hamburguerIcon = d.querySelector('[data-hamburguer-icon]');
const $closeIcon = d.querySelector('[data-close-icon]');
const $header = d.querySelector('[data-header]');
const $navModal = d.querySelector('[data-nav-modal]');
const $body = d.querySelector('[data-body]');

$hamburguerIcon.addEventListener('click', e => {
    $header.className = 'header--hidden';
    $navModal.className = 'nav-modal--visible';
    $body.className = 'body--no-scroll';
})

$closeIcon.addEventListener('click', e => {
    $header.className = 'header';
    $navModal.className = 'nav-modal';
    $body.className = 'body';
})

// ----------------- For the aside -----------------

const $asideForm = d.querySelector('[data-aside-form]');
let messageTimeout;

$asideForm.addEventListener('submit', e => {
    e.preventDefault();
    clearTimeout(messageTimeout);

    const $inputContainer = $asideForm.querySelector('[data-input-container]');
    const $input = $asideForm.email;
    const emailRegex = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;    

    if (emailRegex.test($input.value)) {
        $inputContainer.className = 'aside__input-container--success';
        $input.className = 'aside__input--success';
        messageTimeout = setTimeout(() => {
            $inputContainer.className = 'aside__input-container';
            $input.className = 'aside__input';
        }, 5000);
    }else{
        $inputContainer.className = 'aside__input-container--error';
        $input.className = 'aside__input--error';
        messageTimeout = setTimeout(() => {
            $inputContainer.className = 'aside__input-container';
            $input.className = 'aside__input';
        }, 5000);
    }
})