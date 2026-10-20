'use client';
import { useState } from 'react';

/**
 * Avatar for API-sourced URLs.
 *
 * Why not `next/image`: the API returns plain string paths (e.g. "/avatar/morgan.svg")
 * that carry no intrinsic dimensions, so `next/image` throws
 * "missing required width property" and takes the whole page down. Those URLs are also
 * not guaranteed to resolve, so we fall back to an initials chip on error.
 *
 * `src` is tolerated as a string or as an `{ src }` wrapper because some call sites
 * pass the raw avatar descriptor straight through.
 */
const AVATAR_VARIANTS = [
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'secondary',
];

const resolveSrc = (src) => {
    if (typeof src === 'string') return src.trim() || null;
    if (src && typeof src === 'object' && typeof src.src === 'string') {
        return src.src.trim() || null;
    }
    return null;
};

const HkAvatar = ({ src, name = '', size = 40, className = '', variant, ...rest }) => {
    const [failed, setFailed] = useState(false);
    const url = resolveSrc(src);
    const label = String(name || '').trim();
    const showImg = url && !failed;

    if (showImg) {
        const classes = ['avatar-img', className]
            .filter(Boolean)
            .filter((c, i, arr) => arr.indexOf(c) === i)
            .join(' ');

        return (
            <img
                src={url}
                alt={label || 'user'}
                width={size}
                height={size}
                className={classes}
                onError={() => setFailed(true)}
                {...rest}
            />
        );
    }

    const tone = variant || AVATAR_VARIANTS[(label.charCodeAt(0) || 0) % AVATAR_VARIANTS.length];
    const classes = ['initial-wrap', `avatar-${tone}`, className]
        .filter(Boolean)
        .filter((c, i, arr) => arr.indexOf(c) === i)
        .join(' ');

    return (
        <span className={classes}>{label[0] || '?'}</span>
    );
};

export default HkAvatar;
