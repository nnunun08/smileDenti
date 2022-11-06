import React, { useState, useEffect } from 'react';
import '../../styles/views/ChartToothImages.css'

export default function ChartToothImages() {
  const [toothType, setToothType] = useState('0');        //선택 타입 - 1:우식치야, 2:우식의심치아, 3:상실치아, 4:잇몸부종
  const [toothData, setToothData] = useState('');    //치아정보

    useEffect(() => {
        let obj = {
            T11: '', T12: '', T13: '', T14: '', T15: '', T16: '', T17: '', T18: '', T21: '', T22: '', T23: '', T24: '', T25: '', T26: '', T27: '', T28: ''
            , T31: '', T32: '', T33: '', T34: '', T35: '', T36: '', T37: '', T38: '', T41: '', T42: '', T43: '', T44: '', T45: '', T46: '', T47: '', T48: ''
        };
        setToothData(obj);
    }, []);

    const headerRender = (list) => { 
        return list.map((cur, idx) => {
            return (
                <td key={'header_' + idx}>{cur}</td>
            )
        });
    }

    if(!toothData)
        return;

    const toothRender = (list) => {   
        return list.map((cur, idx) => {
            return (
                <td key={'T' + idx}>
                    <svg width='36' height='36' id={'T' + cur} onClick={clickTooth}>                        
                        <g transform='translate(0.000000,32.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'>
                            <path d='M50 308 c-13 -8 -30 -25 -38 -38 -32 -61 32 -270 84 -270 7 0 24 16
                            36 35 13 19 25 35 28 35 3 0 15 -16 28 -36 28 -42 48 -41 79 4 27 41 57 171
                            48 210 -12 57 -45 71 -145 62 -14 -1 -41 1 -60 4 -22 4 -45 2 -60 -6z m228
                            -31 c26 -24 29 -67 8 -142 -17 -67 -43 -115 -61 -115 -8 0 -21 13 -30 30 -20
                            39 -50 39 -70 0 -20 -39 -40 -38 -61 2 -45 86 -55 190 -24 223 19 20 31 22
                            118 22 83 0 100 -3 120 -20z'/>
                        </g>                        
                        
                        {/* 우식치아 x,y*/}
                        <polygon points='15,15 20,15 17.5,10' 
                            style={{pointerEvents: 'none', fill: 'red', stroke: 'red', strokeWidth: 1}}
                            visibility={toothData['T' + cur].includes('1') ? 'visible' : 'hidden'}
                        />
                        {/* 우식의심치아 x,y*/}
                        <polygon points='15,15 20,15 17.5,20'
                            style={{pointerEvents: 'none', fill: 'red', stroke: 'red', strokeWidth: 1}}
                            visibility={toothData['T' + cur].includes('1') || toothData['T' + cur].includes('2') ? 'visible' : 'hidden'}
                        />

                        {/* 상실치아 */}
                        <path stroke='blue' d='M 0 15 Q 17 0 32 15' 
                            style={{pointerEvents: 'none', fill: 'none', stroke: 'blue'}}
                            visibility={toothData['T' + cur].includes('3') ? 'visible' : 'hidden'}
                        /> 

                        {/* 잇몸부종 */}
                        <path stroke='blue' d='M 0 20 Q 17 32 32 20' 
                            style={{pointerEvents: 'none', fill: 'none', stroke: 'blue'}}
                            visibility={toothData['T' + cur].includes('4') ? 'visible' : 'hidden'}
                        />
                    </svg>
                </td>
            )
        });
    }
    
    //chart tooth click
    const clickTooth = (e) => {
        let { id } = e.target;
        if(toothType === '0') {
            alert('타입을 선택하세요.');
            return;
        }

        // if(Util.avoidNull(id) === '')
        //     return;
        
        let item = toothData;
        let str = item[id] + toothType;
        
        //우식치아 클릭 처리        
        if(toothType === '1') {
            let size = str.match(/1/g).filter(item => item !== '').length;
            
            if(str.match(/2/g))
                str = str.replace(/1|2/g, '');

            if(size === 2)
                str = str.replace(/1/g, '') + '2';
        }

        //상실치아
        if(toothType === '3') {
            let size = str.match(/3/g).filter(item => item !== '').length;
            if(size === 2)
                str = str.replace(/3/g, '');
        }
        
        //잇몸부종
        if(toothType === '4') {
            let size = str.match(/4/g).filter(item => item !== '').length;
            if(size === 2)
                str = str.replace(/4/g, '');
        }

        //중복제거
        let regex = /(.)(.*?)(\1)/g;
        while (regex.test(str))
            str = str.replace(regex, '$1$2');

        //정렬
        item[id] = str.split('').sort().join('');
        setToothData((state) => ({...state}));
    }

    return (        
        <div className='tooth-view__wrapper'>
            <div className='header-title-__wrapper'>
                {toothType === '1' ? '우식치아' : toothType === '2' ? '우식의심치아' : toothType === '3' ? '상실치아' : toothType === '4' ? '잇몸부종' : '선택해요'}
            </div>
            <br/>
            <table className='tooth-image__table'>
                <tbody>
                    <tr>
                        {headerRender([18,17,16,15,14,13,12,11,21,22,23,24,25,26,27,28])}
                    </tr>
                    <tr>
                        {toothRender([18,17,16,15,14,13,12,11,21,22,23,24,25,26,27,28])}
                    </tr>
                    <tr>
                        {headerRender([48,47,46,45,44,43,42,41,31,32,33,34,35,36,37,38])}
                    </tr>
                    <tr>
                        {toothRender([48,47,46,45,44,43,42,41,31,32,33,34,35,36,37,38])}
                    </tr>
                </tbody>
            </table>     
            <div>                
                <input className='gray-btn' type='button' onClick={(e)=> setToothType('1')} value='우식치아/우식의심치아'/>
                <input className='gray-btn' type='button' onClick={(e)=> setToothType('3')} value='상실치아'/>
                <input className='gray-btn' type='button' onClick={(e)=> setToothType('4')} value='잇몸부종'/>
            </div>
            <div>
                <input className='gray-btn' type='button' onClick={() => console.log(toothData)} value='콘솔 프린트(F12)'/>
            </div>
        </div>
    );
}
