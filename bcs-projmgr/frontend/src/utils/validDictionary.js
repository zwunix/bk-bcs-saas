/*
 * Tencent is pleased to support the open source community by making 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 * Copyright (C) 2017-2019 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 *
 */

const dictionary = {
    cn: {
        messages: {
            alpha: field => '字段只能包含字母',
            required: field => '字段不能为空',
            unique: field => '字段不能重复',
            string: field => '字段只能包含数字，字母和下划线',
            numeric: field => '字段只能包含数字',
            regex: (field, regex) => {
                return `字段不符合(${regex})正则表达式规则`
            },
            max: (field, args) => {
                return `字段长度不能超过${args}个字符`
            },
            min: (field, args) => {
                return `字段长度不能少于${args}个字符`
            }
        }
    }
}

export default dictionary
