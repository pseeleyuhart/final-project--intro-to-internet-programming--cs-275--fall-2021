window.onload = () => {
    const left = document.getElementById(`left`);
    const right = document.getElementById(`right`);
    const original = document.getElementById(`meds`);
    const picRed = document.getElementById(`red`);
    const picGreen = document.getElementById(`green`);
    const picBlue = document.getElementById(`blue`);
    const picBlack = document.getElementById(`black`);

    let max = 4;
    let slide = 0;
    document.onkeydown = keyDown;

    left.style.visibility = `hidden`;
    right.style.visibility = `visible`;
    picRed.classList.add(`set`);
    picGreen.classList.add(`set`);
    picBlue.classList.add(`set`);
    picBlack.classList.add(`set`);

    left.addEventListener(`click`, () => {
        shiftL();
    });

    right.addEventListener(`click`, () => {
        shiftR();
    });

    function keyDown() {
        if (event.key == `ArrowLeft`) {
            shiftL();
        }
        else if (event.key == `ArrowRight`) {
            shiftR();
        }
    }

    function setLRVisible() {
        left.style.visibility = `visible`;
        right.style.visibility = `visible`;
    }

    function setVisibleHidden(V, H) {
        V.style.visibility = `visible`;
        H.style.visibility = `hidden`;
    }

    function addRemove(x) {
        x.classList.remove(`middleSlide`);
        x.classList.add(`leftSlide`);
    }

    function removeAll(x) {
        x.classList.remove(`middleSlide`);
        x.classList.remove(`leftSlide`);
    }

    function addRightMiddle(x,e) {
        x.classList.add(`rightSlide`);
        e.classList.add(`middleSlide`);
    }

    function addMiddle(x){
        x.classList.add(`middleSlide`);
    }

    function shiftL() {
        if (slide > 0) {
            slide -= 1;
        }
        if (slide === 0) {
            removeAll(picRed);
            setVisibleHidden(right, left);
            addRightMiddle(picRed, original);
        }
        else if (slide === 1)  {
            removeAll(picGreen);
            setLRVisible();
            addRightMiddle(picGreen, picRed);
        }
        else if (slide === 2) {
            removeAll(picBlue);
            setLRVisible();
            addRightMiddle(picBlue, picGreen);
        }
        else if (slide === 3) {
            removeAll(picBlack);
            setLRVisible();
            addRightMiddle(picBlack, picBlue);
        }
        else{
            setVisibleHidden(left, right);
            addMiddle(picBlack);
        }
    }
    function shiftR() {
        if (slide < max) {
            slide += 1;
        }
        if (slide === 0) {
            addMiddle(original);
        }
        else if (slide === 1)  {
            setLRVisible();
            addRemove(original);
            addMiddle(picRed);
        }
        else if (slide === 2) {
            setLRVisible();
            addRemove(picRed);
            addMiddle(picGreen);
        }
        else if (slide === 3) {
            setLRVisible();
            addRemove(picGreen);
            addMiddle(picBlue);
        }
        else{
            setVisibleHidden(left, right);
            addRemove(picBlue);
            addMiddle(picBlack);
        }
    }
};
