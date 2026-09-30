const fs = require('fs');

const filePath = 'c:/Users/admin/Downloads/2.5D/SVC_Cart_Interactive_Simulation.html';
let content = fs.readFileSync(filePath, 'utf8');

// 1. CSS update for FWD photo
const oldCss = `        .photo-img {
            width: 100%;
            height: auto;
            max-height: 520px;
            object-fit: contain;
            display: block;
        }`;

const newCss = `        .photo-img {
            width: 100%;
            height: auto;
            max-height: 520px;
            object-fit: contain;
            display: block;
        }

        #fwd-photo-wrap .photo-img {
            transform: scale(1.15); /* 검은 여백 자르기 */
            filter: brightness(1.2) contrast(1.05); /* 밝기와 선명도 개선 */
            transform-origin: center center;
        }`;

content = content.replace(oldCss, newCss);

// 2. AFT photo hotspots swap
const oldHotspots = `                    <div class="photo-hotspot" style="top:52%; left:26%; width:8.5%; height:30%; --hc:#8b5cf6;" onclick="showDetail('aft-ac1')">
                        <div class="hs-badge" style="font-size:10px; padding:2px 4px;">☕ 에어카페①</div>
                    </div>

                    <div class="photo-hotspot" style="top:52%; left:35.5%; width:8.5%; height:30%; --hc:#8b5cf6;" onclick="showDetail('aft-ac2')">
                        <div class="hs-badge" style="font-size:10px; padding:2px 4px;">☕ 에어카페②</div>
                    </div>

                    <div class="photo-hotspot" style="top:52%; left:44.5%; width:13%; height:30%; --hc:#f97316;" onclick="showDetail('aft-svc')">
                        <div class="hs-badge" style="font-size:10px; padding:2px 5px;">🔄 SVC/사전</div>
                        <div class="hs-sub">양면카트</div>
                    </div>

                    <div class="photo-hotspot" style="top:52%; left:61%; width:9.5%; height:30%; --hc:#ec4899;" onclick="showDetail('aft-df1')">
                        <div class="hs-badge" style="font-size:10px; padding:2px 4px;">🛍️ 면세①</div>
                    </div>

                    <div class="photo-hotspot" style="top:52%; left:71.5%; width:9.5%; height:30%; --hc:#ec4899;" onclick="showDetail('aft-df2')">
                        <div class="hs-badge" style="font-size:10px; padding:2px 4px;">🛍️ 면세②</div>
                    </div>`;

const newHotspots = `                    <div class="photo-hotspot" style="top:52%; left:26%; width:8.5%; height:30%; --hc:#ec4899;" onclick="showDetail('aft-df1')">
                        <div class="hs-badge" style="font-size:10px; padding:2px 4px;">🛍️ 면세①</div>
                    </div>

                    <div class="photo-hotspot" style="top:52%; left:35.5%; width:8.5%; height:30%; --hc:#ec4899;" onclick="showDetail('aft-df2')">
                        <div class="hs-badge" style="font-size:10px; padding:2px 4px;">🛍️ 면세②</div>
                    </div>

                    <div class="photo-hotspot" style="top:52%; left:44.5%; width:13%; height:30%; --hc:#f97316;" onclick="showDetail('aft-svc')">
                        <div class="hs-badge" style="font-size:10px; padding:2px 5px;">🔄 SVC/사전</div>
                        <div class="hs-sub">양면카트</div>
                    </div>

                    <div class="photo-hotspot" style="top:52%; left:61%; width:9.5%; height:30%; --hc:#8b5cf6;" onclick="showDetail('aft-ac1')">
                        <div class="hs-badge" style="font-size:10px; padding:2px 4px;">☕ 에어카페①</div>
                    </div>

                    <div class="photo-hotspot" style="top:52%; left:71.5%; width:9.5%; height:30%; --hc:#8b5cf6;" onclick="showDetail('aft-ac2')">
                        <div class="hs-badge" style="font-size:10px; padding:2px 4px;">☕ 에어카페②</div>
                    </div>`;
content = content.replace(oldHotspots, newHotspots);

// 3. AFT graphic view L2
const oldL2 = `                            <div class="column-title">L2 도어 사이드 (에어카페)</div>
                            <div class="cart-card" style="--cc:#8b5cf6;" onclick="showDetail('aft-ac1')">
                                <div class="cc-top"><span class="cc-icon">☕</span><span class="cc-type full">FULL</span></div>
                                <div class="cc-name">에어카페 풀카트 ①</div>
                                <div class="cc-desc">라면, 스낵, 음료, POS 단말기</div>
                            </div>
                            <div class="cart-card" style="--cc:#8b5cf6;" onclick="showDetail('aft-ac2')">
                                <div class="cc-top"><span class="cc-icon">☕</span><span class="cc-type full">FULL</span></div>
                                <div class="cc-name">에어카페 풀카트 ②</div>
                                <div class="cc-desc">라면 추가분, 핫음료, 소모품</div>
                            </div>`;

const newL2 = `                            <div class="column-title">L2 도어 사이드 (기내 면세)</div>
                            <div class="cart-card" style="--cc:#ec4899;" onclick="showDetail('aft-df1')">
                                <div class="cc-top"><span class="cc-icon">🛍️</span><span class="cc-type full">FULL</span></div>
                                <div class="cc-name">기내 면세 풀카트 ①</div>
                                <div class="cc-desc">화장품, 향수, 주류, 담배</div>
                            </div>
                            <div class="cart-card" style="--cc:#ec4899;" onclick="showDetail('aft-df2')">
                                <div class="cc-top"><span class="cc-icon">🛍️</span><span class="cc-type full">FULL</span></div>
                                <div class="cc-name">기내 면세 풀카트 ②</div>
                                <div class="cc-desc">패션잡화, 건강식품, 전자제품</div>
                            </div>`;
content = content.replace(oldL2, newL2);

// 4. AFT graphic view R2
const oldR2 = `                            <div class="column-title">R2 도어 사이드 (기내 면세)</div>
                            <div class="cart-card" style="--cc:#ec4899;" onclick="showDetail('aft-df1')">
                                <div class="cc-top"><span class="cc-icon">🛍️</span><span class="cc-type full">FULL</span></div>
                                <div class="cc-name">기내 면세 풀카트 ①</div>
                                <div class="cc-desc">화장품, 향수, 주류, 담배</div>
                            </div>
                            <div class="cart-card" style="--cc:#ec4899;" onclick="showDetail('aft-df2')">
                                <div class="cc-top"><span class="cc-icon">🛍️</span><span class="cc-type full">FULL</span></div>
                                <div class="cc-name">기내 면세 풀카트 ②</div>
                                <div class="cc-desc">패션잡화, 건강식품, 전자제품</div>
                            </div>`;

const newR2 = `                            <div class="column-title">R2 도어 사이드 (에어카페)</div>
                            <div class="cart-card" style="--cc:#8b5cf6;" onclick="showDetail('aft-ac1')">
                                <div class="cc-top"><span class="cc-icon">☕</span><span class="cc-type full">FULL</span></div>
                                <div class="cc-name">에어카페 풀카트 ①</div>
                                <div class="cc-desc">라면, 스낵, 음료, POS 단말기</div>
                            </div>
                            <div class="cart-card" style="--cc:#8b5cf6;" onclick="showDetail('aft-ac2')">
                                <div class="cc-top"><span class="cc-icon">☕</span><span class="cc-type full">FULL</span></div>
                                <div class="cc-name">에어카페 풀카트 ②</div>
                                <div class="cc-desc">라면 추가분, 핫음료, 소모품</div>
                            </div>`;
content = content.replace(oldR2, newR2);

// 5. Carts JSON swap - First swap to temp keys
content = content.replace("'aft-ac1':", "'temp-df1':");
content = content.replace("'aft-ac2':", "'temp-df2':");
content = content.replace("'aft-df1':", "'temp-ac1':");
content = content.replace("'aft-df2':", "'temp-ac2':");
// Now swap back
content = content.replace("'temp-df1':", "'aft-df1':");
content = content.replace("'temp-df2':", "'aft-df2':");
content = content.replace("'temp-ac1':", "'aft-ac1':");
content = content.replace("'temp-ac2':", "'aft-ac2':");

const oldAcBlock1 = `        'aft-df1': {
            name: '에어카페 풀카트 ①',
            icon: '☕',
            color: '#8b5cf6',
            position: 'AFT 갤리 · L2 도어 사이드 (좌측 ①)',
            type: 'full',
            idPrefix: 'aft_aircafe1',`;
const newDfBlock1 = `        'aft-df1': {
            name: '기내 면세 풀카트 ①',
            icon: '🛍️',
            color: '#ec4899',
            position: 'AFT 갤리 · L2 도어 사이드 (좌측 ①)',
            type: 'full',
            idPrefix: 'aft_dutyfree1',`;
content = content.replace(oldAcBlock1, newDfBlock1);

const oldAcBlock2 = `        'aft-df2': {
            name: '에어카페 풀카트 ②',
            icon: '☕',
            color: '#8b5cf6',
            position: 'AFT 갤리 · L2 도어 사이드 (좌측 ②)',
            type: 'full',
            idPrefix: 'aft_aircafe2',`;
const newDfBlock2 = `        'aft-df2': {
            name: '기내 면세 풀카트 ②',
            icon: '🛍️',
            color: '#ec4899',
            position: 'AFT 갤리 · L2 도어 사이드 (좌측 ②)',
            type: 'full',
            idPrefix: 'aft_dutyfree2',`;
content = content.replace(oldAcBlock2, newDfBlock2);

const oldDfBlock1 = `        'aft-ac1': {
            name: '기내 면세 풀카트 ①',
            icon: '🛍️',
            color: '#ec4899',
            position: 'AFT 갤리 · R2 도어 사이드 (우측 ①)',
            type: 'full',
            idPrefix: 'aft_dutyfree1',`;
const newAcBlock1 = `        'aft-ac1': {
            name: '에어카페 풀카트 ①',
            icon: '☕',
            color: '#8b5cf6',
            position: 'AFT 갤리 · R2 도어 사이드 (우측 ①)',
            type: 'full',
            idPrefix: 'aft_aircafe1',`;
content = content.replace(oldDfBlock1, newAcBlock1);

const oldDfBlock2 = `        'aft-ac2': {
            name: '기내 면세 풀카트 ②',
            icon: '🛍️',
            color: '#ec4899',
            position: 'AFT 갤리 · R2 도어 사이드 (우측 ②)',
            type: 'full',
            idPrefix: 'aft_dutyfree2',`;
const newAcBlock2 = `        'aft-ac2': {
            name: '에어카페 풀카트 ②',
            icon: '☕',
            color: '#8b5cf6',
            position: 'AFT 갤리 · R2 도어 사이드 (우측 ②)',
            type: 'full',
            idPrefix: 'aft_aircafe2',`;
content = content.replace(oldDfBlock2, newAcBlock2);

content = content.replace(`            items: [
                '컵라면 (신라면, 진라면 등)',
                '스낵류 (과자, 초콜릿, 젤리 등)',
                '캔음료 및 주스류',
                '에어카페 POS 결제 단말기 보관'
            ],
            note: '에어카페 메인 판매 카트입니다. L2 도어 사이드에 위치합니다.'`, `            items: [
                '면세 화장품 / 스킨케어류',
                '면세 향수',
                '면세 주류 (위스키, 와인 등)',
                '면세 담배',
                'SELL 표시 라벨 및 재고 관리 시트'
            ],
            note: 'L2 도어 사이드 위치. SELL 표시 카트로 고정 상태 점검이 필수입니다.'`);

content = content.replace(`            items: [
                '컵라면 및 스낵 추가 재고',
                '핫음료 세트 (원두커피, 차 종류)',
                '시즌 한정 메뉴 상품',
                '에어카페 컵, 빨대, 스틱 등 소모품'
            ],
            note: '에어카페 풀카트 ①과 함께 L2 사이드에 위치합니다.'`, `            items: [
                '면세 패션잡화 / 액세서리',
                '면세 건강식품 / 스낵',
                '면세 전자제품 / 기타 기념품',
                '면세 재고 수불 관리표'
            ],
            note: '면세 카트 ①과 함께 L2 사이드에 위치합니다.'`);

content = content.replace(`            items: [
                '면세 화장품 / 스킨케어류',
                '면세 향수',
                '면세 주류 (위스키, 와인 등)',
                '면세 담배',
                'SELL 표시 라벨 및 재고 관리 시트'
            ],
            note: 'R2 도어 사이드 위치. SELL 표시 카트로 고정 상태 점검이 필수입니다.'`, `            items: [
                '컵라면 (신라면, 진라면 등)',
                '스낵류 (과자, 초콜릿, 젤리 등)',
                '캔음료 및 주스류',
                '에어카페 POS 결제 단말기 보관'
            ],
            note: '에어카페 메인 판매 카트입니다. R2 도어 사이드에 위치합니다.'`);

content = content.replace(`            items: [
                '면세 패션잡화 / 액세서리',
                '면세 건강식품 / 스낵',
                '면세 전자제품 / 기타 기념품',
                '면세 재고 수불 관리표'
            ],
            note: '면세 카트 ①과 함께 R2 사이드에 위치합니다.'`, `            items: [
                '컵라면 및 스낵 추가 재고',
                '핫음료 세트 (원두커피, 차 종류)',
                '시즌 한정 메뉴 상품',
                '에어카페 컵, 빨대, 스틱 등 소모품'
            ],
            note: '에어카페 풀카트 ①과 함께 R2 사이드에 위치합니다.'`);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated successfully');
