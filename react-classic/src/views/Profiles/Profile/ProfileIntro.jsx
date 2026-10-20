import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HkBadge from '../../../components/@hk-badge/@hk-badge';
import HkTooltip from '../../../components/@hk-tooltip/HkTooltip';

//Image 
import avatar3 from '../../../assets/img/avatar3.jpg';

const ProfileIntro = () => {
    return (
        <div className="profile-intro">
            <Card className="card-flush mw-400p bg-transparent">
                <Card.Body>
                    <div className="avatar avatar-xxl avatar-rounded position-relative mb-2">
                        <img src={avatar3} alt="user" className="avatar-img border border-4 border-white" />
                        <HkBadge bg="success" indicator className="badge-indicator-xl position-bottom-end-overflow-1 me-1" />
                    </div>
                    <h4>凯特·琼斯
                        <HkTooltip title="高赞专家" placement="top" >
                            <i className="bi-check-circle-fill fs-6 text-blue ms-1" />
                        </HkTooltip>
                    </h4>
                    <p>
                        用设计与技术，把好点子变成好产品。
                    </p>
                    <ul className="list-inline fs-7 mt-2 mb-0">
                        <li className="list-inline-item d-sm-inline-block d-block mb-sm-0 mb-1 me-3">
                            <i className="bi bi-briefcase me-1" />
                            <Link to="#">联合创始人，</Link>
                            <Link to="#">caoba</Link>
                        </li>
                        <li className="list-inline-item d-sm-inline-block d-block mb-sm-0 mb-1 me-3">
                            <i className="bi bi-geo-alt me-1" />
                            <Link to="#">旧金山，</Link>
                            <Link to="#">美国</Link>
                        </li>
                    </ul>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProfileIntro
