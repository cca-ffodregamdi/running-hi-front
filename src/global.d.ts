declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

// TypeScript가 scss(혹은 css) 파일을 모듈로 인식하지 못해서 발생하는 오류 해결
