import React, { useState } from 'react'
import { Button, Tooltip } from "antd";
import { CaretRightOutlined } from "@ant-design/icons"

const Preview = () => {

  const [imageSrc, setImageSrc]:any = useState(null);
//const [imageFile, setImageFile]: any = useState(null);
  
  const onUpload = (e: any) => {
    const file = e.target.files[0];
    const fileExt = file.name.split('.').pop();

    // 확장자 제한
    if (!['jpeg', 'png', 'jpg', 'JPG', 'PNG', 'JPEG'].includes(fileExt)) {
            alert('jpg, png 파일만 업로드가 가능합니다.');
            return;
        }

    // 파일 리더
    const reader = new FileReader();
    reader.readAsDataURL(file);

    // 파일 업로드
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        // 이미지 경로 선언
        setImageSrc(reader.result || null); // 파일의 컨텐츠
        // 이미지 파일 선언
        //setImageFile(file);
        resolve();
      };
    });
  }

return (
  <>
  <input 
          accept="image/*" 
          multiple type="file"
          onChange={e => onUpload(e)}
        />
        <img 
            width={'100%'} 
            src={imageSrc} 
        />
        <div className="Menu">
            <Tooltip title="재생">
                <Button shape="circle" icon={<CaretRightOutlined />} />
            </Tooltip>
        </div>
  </>        

  )
}


export default Preview
