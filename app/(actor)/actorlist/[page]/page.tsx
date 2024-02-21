/// app/page.tsx
interface IPrams {
  params: { page: number }
}

export default function Page(
  { params: { page } } // 구조분해할당 + 타입스크립트 타입지정  
    : IPrams) {
  return <div>
    actorlist page ={page}
  </div>
}