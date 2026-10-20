import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react';

const TinymceEditor = ({initialvalue}) => {

    const editorRef = useRef(null);

    return (
        <>
            <Editor
                apiKey="59tfa9du2nj9f2vknfej0bmxhctmfjh34keva1mouvizl8af"
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue={initialvalue}
                init={{
                    height: 500,
                    language: "zh-CN",
                    plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "help",
                        "wordcount",
                    ],
                    menu: {
                        tc: {
                            title: "评论",
                            items:
                                "addcomment showcomments deleteallconversations",
                        },
                    },
                    menubar:
                        "file edit view insert format tools table tc help",
                    toolbar:
                        "undo redo | " +
                        "bold italic underline strikethrough backcolor | fontselect fontsizeselect formatselect | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                    autosave_ask_before_unload: true,
                    autosave_interval: "30s",
                    autosave_prefix: "{path}{query}-{id}-",
                    autosave_restore_when_empty: false,
                    autosave_retention: "2m",
                    image_advtab: true,
                    link_list: [
                        {
                            title: "我的页面 1",
                            value: "https://www.tiny.cloud",
                        },
                        {
                            title: "我的页面 2",
                            value: "http://www.moxiecode.com",
                        },
                    ],
                    image_list: [
                        {
                            title: "我的页面 1",
                            value: "https://www.tiny.cloud",
                        },
                        {
                            title: "我的页面 2",
                            value: "http://www.moxiecode.com",
                        },
                    ],
                    image_class_list: [
                        { title: "无", value: "" },
                        { title: "自定义类", value: "class-name" },
                    ],
                    content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    image_caption: true,
                    quickbars_selection_toolbar:
                        "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
                    noneditable_noneditable_class: "mceNonEditable",
                    toolbar_mode: "sliding",
                    spellchecker_ignore_list: ["Ephox", "Moxiecode"],
                    tinycomments_mode: "embedded",
                }}
            />
        </>
    )
}

export default TinymceEditor
