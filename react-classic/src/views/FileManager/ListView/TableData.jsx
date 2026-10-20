import React, { useEffect, useState } from 'react';
import { Copy, Download, Eye, Info, Link2, MoreHorizontal, SkipForward, Trash2, UserPlus } from 'react-feather';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import HkTooltip from '../../../components/@hk-tooltip/HkTooltip';
import { fileAPI } from '../../../services/modules';


//Custom Avatar Container
export const nameFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            <div className="media fmapp-info-trigger" key={indx} >
                <div className="media-head me-3">
                    {data.icons && <div className={classNames("avatar avatar-icon avatar-sm", (`avatar-soft-${data.iconBg}`))}>
                        <span className="initial-wrap">
                            <i className={`ri-${data.icons}`} />
                        </span>
                    </div>}
                    {data.img && <img src={data.img} alt="用户" className="d-block img-fluid w-50p" />}
                </div>
                <div className="media-body">
                    <div className="file-name">{data.fileName}</div>
                    <div>{data.fileType}</div>
                </div>
            </div >
        ))
    )
}


//Custom Sharing Container
export const sharingFormater = (cell) => {
    return (
        <div className="avatar-group avatar-group-overlapped">
            {cell.map((data, indx) => (
                <React.Fragment key={indx}>
                    {
                        data.img && <HkTooltip placement="top" title={data.userName} >
                            <div className="avatar avatar-rounded" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="迪恩" >
                                <img src={data.img} alt="用户" className="avatar-img" />
                            </div>
                        </HkTooltip>
                    }
                    {
                        data.intAvt && <HkTooltip placement="top" title={data.userName} >
                            <div className={classNames("avatar avatar-rounded", (`avatar-soft-${data.initAvtBg}`))} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-original-title="汤姆">
                                <span className="initial-wrap">{data.intAvt}</span>
                            </div>
                        </HkTooltip>
                    }
                    {data.blank && <span>-</span>}
                </React.Fragment>
            ))}
        </div>

    )
}

//Custom Action Container
export const actionFormater = (cell) => {
    return (
        cell.map((data, indx) => (
            <span className="text-right" key={indx}>
                <Dropdown>
                    <Dropdown.Toggle variant="flush-dark" className="btn-icon btn-rounded flush-soft-hover no-caret" >
                        <span className="icon">
                            <span className="feather-icon">
                                <MoreHorizontal />
                            </span>
                        </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to={data.preview} >
                            <span className="feather-icon dropdown-icon">
                                <Eye />
                            </span>
                            <span>预览</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <Copy />
                            </span>
                            <span>创建副本</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <SkipForward />
                            </span>
                            <span>移动</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <UserPlus />
                            </span>
                            <span>邀请</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <Link2 />
                            </span>
                            <span>共享链接</span>
                        </Dropdown.Item>
                        <div className="dropdown-divider" />
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <Info />
                            </span>
                            <span>查看详情</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <Download />
                            </span>
                            <span>下载</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <span className="feather-icon dropdown-icon">
                                <Trash2 />
                            </span>
                            <span>删除</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </span>
        ))
    )
}


export const columns = [
    {
        accessor: "name",
        title: "名称",
        sort: true,
        cellFormatter: nameFormater,
    },
    {
        accessor: "sharing",
        title: "共享",
        sort: true,
        cellFormatter: sharingFormater,
    },
    {
        accessor: "modified",
        title: "修改时间",
        sort: true,
    },
    {
        accessor: "size",
        title: "大小",
        sort: true,
    },
    {
        accessor: "actions",
        title: "操作",
        cellFormatter: actionFormater,
    },
];

export const useFileData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let cancelled = false;
        const fetchFiles = async () => {
            setLoading(true);
            try {
                const res = await fileAPI.getFiles();
                if (!cancelled) {
                    setData((res.data || []).map((file) => ({
                        starred: file.starred || false,
                        name: file.name
                            ? [{ icons: file.icon || undefined, iconBg: file.iconBg || 'blue', fileName: file.name, fileType: file.type || file.fileType || '' }]
                            : file.icon ? [{ icons: file.icon, iconBg: file.iconBg || 'blue', fileName: file.fileName, fileType: file.fileType || '' }]
                            : [{ img: file.thumbnail || file.image, fileName: file.fileName || file.name, fileType: file.fileType || file.type || '' }],
                        sharing: file.sharing || [{ blank: true }],
                        modified: file.modified || file.updatedAt || '',
                        size: file.size || '',
                        actions: [{ preview: file.previewLink || '#' }],
                    })));
                }
            } catch (e) {
                // silent fail
            } finally {
                if (!cancelled) setLoading(false);
            }
        };
        fetchFiles();
        return () => { cancelled = true; };
    }, []);

    return { data, loading };
};
