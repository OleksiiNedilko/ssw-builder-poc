import {FC, useRef} from 'react'
import EmailEditor, {EditorRef, EmailEditorProps} from 'react-email-editor'
import Mustache from 'mustache'
import {useNavigate, useSearchParams} from 'react-router-dom'

const Editor: FC = () => {
  const emailEditorRef = useRef<EditorRef>(null)
  const navigate = useNavigate()
  const [params] = useSearchParams()

  const exportHtml = async () => {
    const unlayer = emailEditorRef.current?.editor
    const name = params.get('name')
    const slug = params.get('slug')
    if (name && slug) {

      unlayer?.exportHtml((data,) => {
        const {design, html} = data
        console.log(html)
        localStorage.setItem(slug, html)
        navigate(`/?slug=${slug}&name=${name}`)

        // console.log('--------------------')
        // console.log(design)
        //     let result = Mustache.render(html,{});
        // console.log(result)
      }, {cleanup: true,minify:true})
    } else {
      navigate(`/`)
    }
  }

  const onReady: EmailEditorProps['onReady'] = (unlayer) => {
    // unlayer.registerCallback('previewHtml',function (params, done) {
    //   console.log('cb')
    //   fetch(`https://staging-api.sswmeetings.com/graphql`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'access-token': 'OaamD8BiZbi6U_dHzwEKUg',
    //         'client': '7KQ_DQyNlSY2rQYstxMIyw',
    //         'uid': 'olek@gojilabs.com'
    //       },
    //       body: JSON.stringify({
    //         query: `query adminsSearch($q: String!) {
    //             searchAdmins(q: $q) {
    //               firstName
    //               lastName
    //               email
    //               id
    //             }
    //           }`,
    //         variables: {q: ''}
    //       })
    //     }
    //   ).then(res => res.json()).then(res => {
    //     if(res.errors){
    //       console.warn(res.errors)
    //     }
    //     let result = Mustache.render(params.html, {admins: res?.data?.searchAdmins||[]});
    //     console.log(result)
    //     done({
    //       html: result, // you can pass your custom html here
    //     });
    //   })

    // });
    // editor is ready
    // you can load your template here;
    // the design json can be obtained by calling
    // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)

    // const templateJson = { DESIGN JSON GOES HERE };
    // unlayer.loadDesign(templateJson);
  }

  return (<>
    <button className={'export'} title="see result in console" onClick={exportHtml}>Export</button>
    <EmailEditor
      ref={emailEditorRef}
      onReady={onReady}
      options={{
        displayMode: 'web', projectId: 184069, customJS: [],
        // mergeTags:{
        //   firstName: {
        //     name: 'First name',
        //     value: '{{firstName}}',
        //   },
        //   lastName: {
        //     name: 'Last name',
        //     value: '{{lastName}}',
        //   },
        //   id: {
        //     name: 'Id',
        //     value: '{{id}}',
        //   },
        //   admins: {
        //     name: 'Admins',
        //     rules: {
        //       repeat: {
        //         name: 'Repeat for Each Admin',
        //         before: '{{#admins}}',
        //         after: '{{/admins}}',
        //       },
        //     },
        //   },
        // },
      }}
      minHeight={'calc(99svh - 48px)'}
    /></>)
}

export default Editor
