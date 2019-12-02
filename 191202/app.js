const listeners = document.querySelectorAll('[data-model]')

// for ... of  비동기로 돌려면 for ... of로
listeners.forEach(listener => {
  const name = listener.dataset.model
  listener.addEventListener('keyup', event => {
    state[name] = listener.value
  })
})

const render = () => {

}

// proxy 라는 객체는 기본적인 동작(속성 접근, 할당, 순회, 열거, 함수 호출 등)의 새로운 행동을 정의할 때 사용
const createState = state => {
  return new Proxy(state, {
    set (target, property, value) {
      target[property] = value
      render()
      return true
    }
  })
}

// 상태가 변하는 대상을 state 라는 변수에 할당
const state = createState({
  name: 'Kwansik',
  email: 'kwansk0424@gmail.com'
})

