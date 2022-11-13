import React, {useState} from 'react'
import Btn from '../components/Btn'
import Radio from '../components/Radio'
import Tooth from '../components/Tooth'
import CheckBox from '../components/CheckBox'
import '../styles/screens/DeskPrint.css'

export default function DeskPrint02() {

    return (
        <>
            <div className='DeskPrint02'>
                <h1>구강검진 결과통보서</h1>

                <div className='topTable'>
                    <table className='printTable'>
                    <colgroup>
                        <col width={'105px'}></col>
                        <col width={'125px'}></col>
                        <col width={'105px'}></col>
                        <col width={'*'}></col>
                        <col width={'105px'}></col>
                        <col width={'*'}></col>
                        <col width={'105px'}></col>
                        <col width={'125px'}></col>
                    </colgroup>
                    <tr>
                        <th>수검자 성명</th>
                        <td style={{textAlign:'center'}}>{'홍길동'}</td>
                        <th>주민등록번호</th>
                        <td>{'980225-2333333'}</td>
                        <th>검진장소</th>
                        <td>
                            <label className='checkBoxWrap' htmlFor="post">
                                <CheckBox id='post' type='small'/>
                                내원
                            </label>
                            <label className='checkBoxWrap' htmlFor="email">
                                <CheckBox id='email' type='small' />
                                출장
                            </label>
                        </td>
                        <th>검진일</th>
                        <td>{'2022.10.22'}</td>
                    </tr>
                    </table>
                </div>

                <div className='printCard'>
                    <div className='head'>
                        <h2>나의 구강검진 종합소견은?</h2>
                        
                        <div className='radioWrap checkType fillType'>
                            <Radio
                                checked={true}
                                id={'total01'}
                                name={'total'}
                                label={'정상A'}
                            />
                            <Radio
                                id={'total02'}
                                name={'total'}
                                label={'정상B'}
                            />
                            <Radio
                                id={'total03'}
                                name={'total'}
                                label={'주의'}
                            />
                            <Radio
                                id={'total04'}
                                name={'total'}
                                label={'치료필요'}
                            />
                        </div>

                    </div>
                    <div className='body'>
                        <div className='tit'><b>홍길동</b>님은 다음 사항에 대해 <b>바로 조치</b>가 필요합니다.</div>
                        <div className='contents'>
                            {/* 진단내용 */}
                        </div>
                        <div className='tit'><b>홍길동</b>님은 다음 사항에 대해 <b>적극적인 관리</b>가 필요합니다.</div>
                        <div className='contents'>
                            {/* 진단내용 */}
                        </div>
                    </div>
                </div>

                <div className='printCard printCard2'>
                    <div className='head'>
                        <h2>나의 구강검사 결과는?</h2>
                        <div></div>
                    </div>
                    <div className='body'>
                        <div className='top'>
                            <div>
                                <svg width="98" height="116" viewBox="0 0 98 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 43.0351H95.5733V96C95.5733 105.941 87.5145 114 77.5733 114H20C10.0589 114 2 105.941 2 96V43.0351Z" fill="white" stroke="#BFBFBF" stroke-width="4"/>
                                <path d="M0 34.7093C0 23.6636 8.95431 14.7093 20 14.7093H77.5733C88.619 14.7093 97.5733 23.6636 97.5733 34.7093V37.3177H0V34.7093Z" fill="#55C2E4"/>
                                <rect x="17.0391" y="2" width="14.7093" height="26.6085" rx="7.35463" fill="#55C2E4" stroke="white" stroke-width="4"/>
                                <rect x="67.0156" y="2" width="14.7093" height="26.6085" rx="7.35463" fill="#55C2E4" stroke="white" stroke-width="4"/>
                                <path d="M37.0361 65.519H21.5801V67.393H28.334V70.3061H30.6719V67.393H37.0361V65.519ZM23.3984 73.7573H35.3291V71.8647H25.7549V68.8403H23.3984V73.7573ZM23.5098 64.1274H35.0508V57.9116H23.5098V64.1274ZM25.8291 62.2905V59.7485H32.7314V62.2905H25.8291ZM43.7514 60.5092V60.268H47.147V58.3755H37.8696V60.268H41.3393V60.5092C41.3393 62.643 40.0498 64.8418 37.2388 65.7417L38.4634 67.5971C40.4487 66.9384 41.8218 65.6118 42.5918 63.9419C43.3525 65.4633 44.6792 66.6787 46.5718 67.2817L47.7778 65.4262C45.0039 64.582 43.7422 62.5224 43.7514 60.5092ZM39.9848 73.7573H51.7485V71.8647H42.3784V68.2837H39.9848V73.7573ZM48.9282 69.3969H51.3032V57.188H48.9282V69.3969ZM68.1865 70.2876H64.2714V67.0776H66.8134V65.1665H64.5127V60.4165H66.8877V58.5239H53.9365V60.4165H56.2744V65.1665H54.0107V67.0776H56.5713V70.2876H52.7304V72.1801H68.1865V70.2876ZM58.6494 65.1665V60.4165H62.1748V65.1665H58.6494ZM58.9463 70.2876V67.0776H61.8964V70.2876H58.9463ZM31.0244 81.2827H22.0254V83.1753H23.3984V87.9253C22.7676 87.9345 22.1553 87.9438 21.5986 87.9438L21.8398 89.8549C24.521 89.8549 28.2041 89.79 31.377 89.2612L31.2842 87.5171C30.7554 87.582 30.1987 87.6377 29.6328 87.6748V83.1753H31.0244V81.2827ZM24.252 93.9184C24.252 95.8852 26.4414 97.0634 30.0596 97.0542C33.687 97.0634 35.8765 95.8852 35.8857 93.9184C35.8765 91.896 33.687 90.7549 30.0596 90.7456C26.4414 90.7549 24.252 91.896 24.252 93.9184ZM25.6807 87.8789V83.1753H27.3691V87.8232C26.8032 87.8418 26.2373 87.8696 25.6807 87.8789ZM26.6084 93.9184C26.6084 93 27.8052 92.5547 30.0596 92.5639C32.314 92.5547 33.52 93 33.5293 93.9184C33.52 94.8091 32.314 95.2544 30.0596 95.2544C27.8052 95.2544 26.6084 94.8091 26.6084 93.9184ZM31.3955 87.9624H33.4736V90.4858H35.8301V80.1694H33.4736V82.9155H31.3955V84.771H33.4736V86.0698H31.3955V87.9624ZM50.4868 80.1694H48.1118V97.0171H50.4868V88.5932H52.8804V86.645H50.4868V80.1694ZM36.979 92.2856L38.3149 94.104C43.9927 91.3115 45.9595 86.9419 45.978 81.895H37.9438V83.8247H43.5752C43.1299 87.5913 40.9775 90.2817 36.979 92.2856Z" fill="#222222"/>
                                </svg>
                            </div>
                            <div>
                                <table className='printTable'>
                                    <colgroup>
                                        <col width={'180px'}></col>
                                        <col width={'*'}></col>
                                        <col width={'180px'}></col>
                                        <col width={'*'}></col>
                                    </colgroup>
                                    <tr>
                                        <th>(치과)병력 문제</th>
                                        <td>
                                            <div className='radioWrap checkType'>
                                                <Radio
                                                    checked={true}
                                                    id={'ida-1'}
                                                    name={'name-a'}
                                                    label={'없음'}
                                                />
                                                <Radio
                                                    id={'ida-2'}
                                                    name={'name-a'}
                                                    label={'있음'}
                                                />
                                            </div>
                                        </td>
                                        <th>구강건강인식도 문제</th>
                                        <td>
                                        <div className='radioWrap checkType'>
                                                <Radio
                                                    checked={true}
                                                    id={'idb-1'}
                                                    name={'name-b'}
                                                    label={'없음'}
                                                />
                                                <Radio
                                                    id={'idb-2'}
                                                    name={'name-b'}
                                                    label={'있음'}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>구강건강 습관문제</th>
                                        <td colSpan={3} style={{padding:'10px 18px'}}>
                                            <div className='group'>
                                                <div className='groupTit'>구강위생</div>
                                                <div className='radioWrap checkType'>
                                                    <Radio
                                                        checked={true}
                                                        id={'id01-1'}
                                                        name={'name01'}
                                                        label={'없음'}
                                                    />
                                                    <Radio
                                                        id={'id01-2'}
                                                        name={'name01'}
                                                        label={'있음'}
                                                    />
                                                </div>
                                            </div>
                                            <div className='group'>
                                                <div className='groupTit'>불소이용</div>
                                                <div className='radioWrap checkType'>
                                                    <Radio
                                                        checked={true}
                                                        id={'id02-1'}
                                                        name={'name02'}
                                                        label={'없음'}
                                                    />
                                                    <Radio
                                                        id={'id02-2'}
                                                        name={'name02'}
                                                        label={'있음'}
                                                    />
                                                </div>
                                            </div>
                                            <br/>
                                            <div className='group'>
                                                <div className='groupTit'>설탕섭취</div>
                                                <div className='radioWrap checkType'>
                                                    <Radio
                                                        checked={true}
                                                        id={'id03-1'}
                                                        name={'name03'}
                                                        label={'없음'}
                                                    />
                                                    <Radio
                                                        id={'id03-2'}
                                                        name={'name03'}
                                                        label={'있음'}
                                                    />
                                                </div>
                                            </div>
                                            <div className='group'>
                                                <div className='groupTit'>흡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;연</div>
                                                <div className='radioWrap checkType'>
                                                    <Radio
                                                        checked={true}
                                                        id={'id04-1'}
                                                        name={'name04'}
                                                        label={'없음'}
                                                    />
                                                    <Radio
                                                        id={'id04-2'}
                                                        name={'name04'}
                                                        label={'있음'}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <div className='middle'>

                            <div className='toothBg'></div>
                            
                            <table>
                                <tr>
                                    <td className='toothLT'>
                                        <div>
                                            <Tooth />
                                            <Tooth op='too1'/>
                                            <Tooth op='too2'/>
                                            <Tooth op='too3'/>
                                            <Tooth />
                                            <Tooth />
                                            <Tooth />
                                            <Tooth />
                                        </div>
                                    </td>
                                    <td className='toothRT'>
                                        <div>
                                            <Tooth />
                                            <Tooth op='too1 too2'/>
                                            <Tooth op='too2 too3'/>
                                            <Tooth />
                                            <Tooth />
                                            <Tooth op='too1 too3'/>
                                            <Tooth />
                                            <Tooth />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='toothLB'>
                                        <div>
                                            <Tooth />
                                            <Tooth op='too1 too2'/>
                                            <Tooth op='too2 too3'/>
                                            <Tooth />
                                            <Tooth />
                                            <Tooth op='too1 too3'/>
                                            <Tooth />
                                            <Tooth />
                                        </div>
                                    </td>
                                    <td className='toothRB'>
                                        <div>
                                            <Tooth op='too1 too2'/>
                                            <Tooth />
                                            <Tooth />
                                            <Tooth />
                                            <Tooth />
                                            <Tooth op='too1 too3'/>
                                            <Tooth />
                                            <Tooth op='too2 too3'/>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            
                            <div className='bottom'>
                                <div style={{margin:'0 auto'}}>
                                    <button className='btn-tooth btn-tooth01 ac'><i></i>우식치아</button>
                                    <button className='btn-tooth btn-tooth02 ac'><i></i>우식의심치아</button>
                                    <button className='btn-tooth btn-tooth03 ac'><i></i>상실치아</button>
                                    <button className='btn-tooth btn-tooth04'><i></i>잇몸부종</button>
                                </div>
                            </div>
                        </div>

                        <div className='middle2'>
                            <div className='item item1'>
                                <div className='category'>
                                    <h3>치아검사</h3>
                                    <span>치아우식증(충치)</span>
                                </div>
                                <div className='cont'>
                                    <ul>
                                        <li>
                                            <h5>우식치아</h5>
                                            <div className='radioWrap checkType'>
                                                <Radio
                                                    checked={true}
                                                    id={'ck01-1'}
                                                    name={'ck-a'}
                                                    label={'없음'}
                                                />
                                                <Radio
                                                    id={'ck01-2'}
                                                    name={'ck-a'}
                                                    label={'있음'}
                                                />
                                            </div>
                                            <div class="inputBx">
                                                <input />
                                                <label>개</label>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>인접면 우식 의심치아</h5>
                                            <div className='radioWrap checkType'>
                                                <Radio
                                                    checked={true}
                                                    id={'ck02-1'}
                                                    name={'ck-b'}
                                                    label={'없음'}
                                                />
                                                <Radio
                                                    id={'ck02-2'}
                                                    name={'ck-b'}
                                                    label={'있음'}
                                                />
                                            </div>
                                            <div class="inputBx">
                                                <input />
                                                <label>개</label>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>수복치아</h5>
                                            <div className='radioWrap checkType'>
                                                <Radio
                                                    checked={true}
                                                    id={'ck03-1'}
                                                    name={'ck-c'}
                                                    label={'없음'}
                                                />
                                                <Radio
                                                    id={'ck03-2'}
                                                    name={'ck-c'}
                                                    label={'있음'}
                                                />
                                            </div>
                                            <div class="inputBx">
                                                <input />
                                                <label>개</label>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>상실치아</h5>
                                            <div className='radioWrap checkType'>
                                                <Radio
                                                    checked={true}
                                                    id={'ck04-1'}
                                                    name={'ck-d'}
                                                    label={'없음'}
                                                />
                                                <Radio
                                                    id={'ck04-2'}
                                                    name={'ck-d'}
                                                    label={'있음'}
                                                />
                                            </div>
                                            <div class="inputBx">
                                                <input />
                                                <label>개</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='item item2'>
                                <div className='category'>
                                    <h3>치주조직검사</h3>
                                    <span>치주질환(잇몸병)</span>
                                </div>
                                <div className='cont'>
                                    <h5>치은염증</h5>
                                    <div className='radioWrap checkType'>
                                        <Radio
                                            checked={true}
                                            id={'item2-11'}
                                            name={'item1'}
                                            label={'없음'}
                                        />
                                        <Radio
                                            id={'item2-12'}
                                            name={'item1'}
                                            label={'경증'}
                                        />
                                        <Radio
                                            id={'item2-13'}
                                            name={'item1'}
                                            label={'중증'}
                                        />
                                    </div>
                                    <h5>치석</h5>
                                    <div className='radioWrap checkType'>
                                        <Radio
                                            checked={true}
                                            id={'item2-21'}
                                            name={'item2'}
                                            label={'없음'}
                                        />
                                        <Radio
                                            id={'item2-22'}
                                            name={'item2'}
                                            label={'경증'}
                                        />
                                        <Radio
                                            id={'item2-23'}
                                            name={'item2'}
                                            label={'중증'}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='item item3'>
                                <div className='category'>
                                    <h3>기타부위검사소견</h3>
                                </div>
                                <div className='cont'>
                                    <textarea className='field'></textarea>
                                </div>
                            </div>

                            
                        </div>

                        <div className='resultGuide'>
                            <div className='title'>
                                <b>결과</b><br/>
                                참고<br/>
                                사항
                            </div>
                            <div className='info1'>
                                <div className='info-tit'>
                                    <h5>
                                        영구치우식 유병률
                                        <div>(2010년 / %)</div>
                                    </h5>
                                    <em>
                                    (보건복지부,2010<br/>
                                    국민구강건강 실태조사.2011)
                                    </em>
                                </div>
                                <div>
                                    <table>
                                        <tr>
                                            <th></th>
                                            <td><b>전체</b></td>
                                            <td><b>남</b></td>
                                            <td><b>여</b></td>
                                        </tr>
                                        <tr>
                                            <th>19-29세</th>
                                            <td>39</td>
                                            <td>42</td>
                                            <td>35</td>
                                        </tr>
                                        <tr>
                                            <th>30-39세</th>
                                            <td>38</td>
                                            <td>42</td>
                                            <td>34</td>
                                        </tr>
                                        <tr>
                                            <th>40-49세</th>
                                            <td>34</td>
                                            <td>37</td>
                                            <td>31</td>
                                        </tr>
                                        <tr>
                                            <th>50-59세</th>
                                            <td>29</td>
                                            <td>31</td>
                                            <td>26</td>
                                        </tr>
                                        <tr>
                                            <th>60-69세</th>
                                            <td>28</td>
                                            <td>33</td>
                                            <td>23</td>
                                        </tr>
                                        <tr>
                                            <th>70세</th>
                                            <td>27</td>
                                            <td>31</td>
                                            <td>25</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className='info2'>
                                 <div className='info-tit'>
                                    <h5>
                                        검사항목<br/>
                                        설정
                                    </h5>
                                </div>
                                <ul>
                                    <li><span>- 우식치아 : </span> 충치가 있는 치아 </li>
                                    <li><span>- 인접면우식의심치아 : </span> 치아사이에 충치가 의심되는 치아</li>
                                    <li><span>- 수복치아 : </span> 충치치료로 금, 레진, 아말감 같은 재료를 씌우거나 때운치아</li>
                                    <li><span>- 상실치아 : </span> 충치로 인해 빠져 새로 해넣어야 하는 치아</li>
                                    <li><span>- 치은염증 : </span> 잇몸에 염증이 있는 정도</li>
                                    <li><span>- 치석 : </span> 치석제거가 필요한 정도</li>
                                </ul>
                            </div>
                        </div>

                        <div className='middle2'>
                            <div className='item item4'>
                                <div className='category'>
                                    <h3>치면세균막검사</h3>
                                    <span>
                                        치아우식증(충치)<br/>
                                        치주질환(잇몸병)
                                    </span>
                                </div>
                                <div className='cont'>
                                    <ul>
                                        <li>
                                            <span>상악우측제1대구치(16번) 세균막   :</span>
                                            <div>
                                                <input value={1} />
                                                <label>점</label>
                                            </div>
                                        </li>
                                        <li>
                                            <span>상악우측제1대구치(16번) 세균막   :</span>
                                            <div>
                                                <input value={1} />
                                                <label>점</label>
                                            </div>
                                        </li>
                                        <li>
                                            <span>상악우측제1대구치(16번) 세균막   :</span>
                                            <div>
                                                <input value={1} />
                                                <label>점</label>
                                            </div>
                                        </li>
                                        <li>
                                            <span>상악우측제1대구치(16번) 세균막   :</span>
                                            <div>
                                                <input value={1} />
                                                <label>점</label>
                                            </div>
                                        </li>
                                        <li>
                                            <span>상악우측제1대구치(16번) 세균막   :</span>
                                            <div>
                                                <input value={1} />
                                                <label>점</label>
                                            </div>
                                        </li>
                                        <li>
                                            <span>상악우측제1대구치(16번) 세균막   :</span>
                                            <div>
                                                <input value={1} />
                                                <label>점</label>
                                            </div>
                                        </li>
                                        <li className='sum'>
                                            <span><b>평균</b></span>
                                            <div>
                                                <input value={6} />
                                                <label>점</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className='verdict'>
                                    <h5>판정</h5>
                                    <div>
                                        - 양호 (1점 미만),<br/>
                                        - 보통 (1~3점 미만),<br/>
                                        - 불량 (3점 이상)
                                    </div>
                                    <span>#평균점수=각치면의 점수합 / 평가치아수</span>
                                </div>
                            </div>
                        </div>

                        <div className='signWrap'>
                            <h5>귀하의 구강검진 결과를 위와 같이 통보합니다.</h5>
                            <div className='flexWrap'>
                                <div class="inputBx">
                                    <label>판정일</label>
                                    <input value={'20220830'} />
                                </div>
                                <div class="inputBx">
                                    <label>치과의사</label>
                                    <input placeholder='면허(자격)번호' />
                                </div>
                                <div class="inputBx">
                                    <label>서명</label>
                                    <input placeholder='서명' />
                                </div>
                            </div>
                            <div className='sign'><pre>(요양기관기호 <label>{''}</label>)</pre></div>
                        </div>

                        <div className='bottomMsg'>
                        # 본 건강검진결과통보서는 상급병원에서 요양급요(진료)가 필요하다는 건강검진종합소견이 있는 경우 요양급여의뢰서(진료의뢰서)로 같음됩니다.
                        </div>
                    </div>
                </div>

                
            </div>
        </>
    )
}
