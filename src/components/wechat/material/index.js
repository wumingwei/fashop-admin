//@flow
import React,{ Component } from 'react'
import { Tabs } from 'antd'
import { View } from 'react-web-dom'
import styles from './index.css'

import Article from './article'
import Image from './image'
import Voice from './voice'
import Video from './video'

const TabPane = Tabs.TabPane

type Props = {}
type State = {}

export default class Material extends Component<Props,State> {
    render() {
        const tabList = [
            {
                key:1,
                tab:'图文消息',
                main:() => <Article {...this.props} />
            }, {
                key:2,
                tab:'图片',
                main:() => <Image {...this.props} />
            }, {
                key:'3',
                tab:'语音',
                main:() => <Voice {...this.props} />
            }, {
                key:'4',
                tab:'视频',
                main:() => <Video {...this.props} />
            }
        ]
        return (
            <Tabs defaultActiveKey="1">
                {
                    tabList.map(({key,tab,main}:{key:string,tab:string,main:Function})=>
                        <TabPane tab={tab} key={key}>
                            {
                                main()
                            }
                        </TabPane>
                    )
                }
            </Tabs>
        )
    }
}
