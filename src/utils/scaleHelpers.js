/**
 * 단위 변환 함수 모음 
 * ex ) 최소 1 ~ 최대 5 => 1 ~ 100단위로 변환
 */

/**
 * @description 주어진 값(value)을 원래의 범위(minOriginal ~ maxOriginal)에서 새로운 범위(0 ~ 100)로 변환
 * @param {number} value - 변환할 원래 값
 * @param {number} minOriginal - 원래 범위의 최소값
 * @param {number} maxOriginal - 원래 범위의 최대값
 * @returns {number} 변환된 0~100 사이의 값
 * @example scaleTo100(75,50,100) => return 50 
 */
export const scaleTo100 = (value, minOriginal, maxOriginal) => {
    const minTarget = 0;
    const maxTarget = 100;

    return ((value - minOriginal) / (maxOriginal - minOriginal)) * (maxTarget - minTarget) + minTarget;
};

/**
 * @description 변환된 0~100의 범위에서 원래의 범위(minOriginal ~ maxOriginal)로 되돌림
 * @param {*} value 되돌릴 변환값
 * @param {*} minOriginal - 원래 범위의 최소값
 * @param {*} maxOriginal - 원래 범위의 최대값
 * @returns {number} 변환된 원래 범위와 값
 * @example scaleFrom100(50,50,100) => return 75
 */
export const scaleFrom100 = (value, minOriginal, maxOriginal) => {
    const minTarget = 0;
    const maxTarget = 100;

    return ((value - minTarget) / (maxTarget - minTarget)) * (maxOriginal - minOriginal) + minOriginal;
};