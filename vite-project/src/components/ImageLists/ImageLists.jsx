// ImageLists.jsx
import animalImages from './animalImages';

export default function ImageLists({ names }) {
  // 1. 表示する画像のリストを用意する
  let showImages = [];

  if (names && names.length > 0) {
    // 2. 親から "cat" や "dog" の名前が来たら、その画像だけ選ぶ
    showImages = animalImages.filter((item) => {
      return names.includes(item.name);
    });
  } else {
    // 3. 何も指定されていなければ全部表示する
    showImages = animalImages;
  }

  // 4. 画面に画像を並べて表示する
  return (
    <div>
      {showImages.map((item) => (
        <img
          key={item.name}
          src={item.src}
          alt={item.name}
          // ↓ サイズ調整のために入れています
          width={120}
          height={120}
        />
      ))}
    </div>
  );
}