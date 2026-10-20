import classNames from 'classnames';
import React, { useState } from 'react';
import GalleryBody from './GalleryBody';
import GalleryHeader from './GalleryHeader';
import GallerySidebar from './GallerySidebar';

const Gallery = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <div className="hk-pg-body py-0">
            <div className={classNames("galleryapp-wrap", { "galleryapp-sidebar-toggle": !showSidebar })} >
                <GallerySidebar />
                <div className="galleryapp-content">
                    <div className="galleryapp-detail-wrap">
                        <GalleryHeader toggleSidebar={() => setShowSidebar(!showSidebar)} showSidebar={showSidebar} />
                        <GalleryBody />
                    </div>
                    {/* Add Category */}
                    <div id="add_new_cat" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="关闭">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                    <h6 className="text-uppercase fw-bold mb-3">新建分类</h6>
                                    <form>
                                        <div className="row gx-3">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="分类名称" />
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" className="btn btn-primary float-end" data-bs-dismiss="modal">添加</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Add Category */}
                </div>
            </div>
        </div>

    )
}

export default Gallery
