"use strict";(self.webpackChunkcomponent_library=self.webpackChunkcomponent_library||[]).push([[623],{"./src/components/Table/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Table_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledTable=styled_components_browser_esm.Ay.table`
    width: 100%;
    border-collapse: collapse;
    cursor: ${props=>props.disabled?"not-allowed":"pointer"};
    opacity: ${props=>props.disabled?.4:1};
    background: ${props=>props.disabled?"grey":props.backgroundColor||"transparent"};
`,StyledTableHeader=styled_components_browser_esm.Ay.thead`
    background-color: ${props=>props.backgroundColor};
`,StyledTableRow=styled_components_browser_esm.Ay.tr`
    &:nth-child(even) {
        background-color: ${props=>props.backgroundColor};
    }
`,StyledTableCell=styled_components_browser_esm.Ay.td`
    padding: 8px;
    border: 1px solid #ddd;
    background-color: ${props=>props.backgroundColor};
`,StyledTableFooter=styled_components_browser_esm.Ay.tfoot`
    background-color: ${props=>props.backgroundColor};
`,TableHeader=({children})=>react.createElement(StyledTableHeader,null,react.createElement("tr",null,children)),TableRow=({children})=>react.createElement(StyledTableRow,null,children),TableCell=({children})=>react.createElement(StyledTableCell,null,children),TableFooter=({children})=>react.createElement(StyledTableFooter,null,react.createElement("tr",null,children));function Table({disabled,backgroundColor,children}){return react.createElement(StyledTable,{disabled,backgroundColor},children)}const Table_Table=Table;TableHeader.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}},TableRow.__docgenInfo={description:"",methods:[],displayName:"TableRow",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}},TableCell.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}},TableFooter.__docgenInfo={description:"",methods:[],displayName:"TableFooter",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}},Table.__docgenInfo={description:"",methods:[],displayName:"Table",props:{disabled:{required:!1,tsType:{name:"boolean"},description:""},backgroundColor:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const Table_stories={title:"Components/Table",component:Table_Table,argTypes:{disabled:{control:{type:"boolean"}},backgroundColor:{control:{type:"color"}}}},Default={args:{disabled:!1,backgroundColor:"#fff"},render:args=>react.createElement(Table_Table,args,react.createElement(TableHeader,null,react.createElement(TableCell,null,"Header 1"),react.createElement(TableCell,null,"Header 2"),react.createElement(TableCell,null,"Header 3")),react.createElement("tbody",null,react.createElement(TableRow,null,react.createElement(TableCell,null,"Row 1, Cell 1"),react.createElement(TableCell,null,"Row 1, Cell 2"),react.createElement(TableCell,null,"Row 1, Cell 3")),react.createElement(TableRow,null,react.createElement(TableCell,null,"Row 2, Cell 1"),react.createElement(TableCell,null,"Row 2, Cell 2"),react.createElement(TableCell,null,"Row 2, Cell 3"))),react.createElement(TableFooter,null,react.createElement(TableCell,null,"Footer 1"),react.createElement(TableCell,null,"Footer 2"),react.createElement(TableCell,null,"Footer 3")))},Disabled={args:{disabled:!0},render:args=>react.createElement(Table_Table,args,react.createElement(TableHeader,null,react.createElement(TableCell,null,"Header 1"),react.createElement(TableCell,null,"Header 2"),react.createElement(TableCell,null,"Header 3")),react.createElement("tbody",null,react.createElement(TableRow,null,react.createElement(TableCell,null,"Row 1, Cell 1"),react.createElement(TableCell,null,"Row 1, Cell 2"),react.createElement(TableCell,null,"Row 1, Cell 3")),react.createElement(TableRow,null,react.createElement(TableCell,null,"Row 2, Cell 1"),react.createElement(TableCell,null,"Row 2, Cell 2"),react.createElement(TableCell,null,"Row 2, Cell 3"))),react.createElement(TableFooter,null,react.createElement(TableCell,null,"Footer 1"),react.createElement(TableCell,null,"Footer 2"),react.createElement(TableCell,null,"Footer 3")))},__namedExportsOrder=["Default","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: false,\n    backgroundColor: '#fff'\n  },\n  render: args => <Table {...args}>\r\n      <TableHeader>\r\n        <TableCell>Header 1</TableCell>\r\n        <TableCell>Header 2</TableCell>\r\n        <TableCell>Header 3</TableCell>\r\n      </TableHeader>\r\n      <tbody>\r\n        <TableRow>\r\n          <TableCell>Row 1, Cell 1</TableCell>\r\n          <TableCell>Row 1, Cell 2</TableCell>\r\n          <TableCell>Row 1, Cell 3</TableCell>\r\n        </TableRow>\r\n        <TableRow>\r\n          <TableCell>Row 2, Cell 1</TableCell>\r\n          <TableCell>Row 2, Cell 2</TableCell>\r\n          <TableCell>Row 2, Cell 3</TableCell>\r\n        </TableRow>\r\n      </tbody>\r\n      <TableFooter>\r\n        <TableCell>Footer 1</TableCell>\r\n        <TableCell>Footer 2</TableCell>\r\n        <TableCell>Footer 3</TableCell>\r\n      </TableFooter>\r\n    </Table>\n}",...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  },\n  render: args => <Table {...args}>\r\n      <TableHeader>\r\n        <TableCell>Header 1</TableCell>\r\n        <TableCell>Header 2</TableCell>\r\n        <TableCell>Header 3</TableCell>\r\n      </TableHeader>\r\n      <tbody>\r\n        <TableRow>\r\n          <TableCell>Row 1, Cell 1</TableCell>\r\n          <TableCell>Row 1, Cell 2</TableCell>\r\n          <TableCell>Row 1, Cell 3</TableCell>\r\n        </TableRow>\r\n        <TableRow>\r\n          <TableCell>Row 2, Cell 1</TableCell>\r\n          <TableCell>Row 2, Cell 2</TableCell>\r\n          <TableCell>Row 2, Cell 3</TableCell>\r\n        </TableRow>\r\n      </tbody>\r\n      <TableFooter>\r\n        <TableCell>Footer 1</TableCell>\r\n        <TableCell>Footer 2</TableCell>\r\n        <TableCell>Footer 3</TableCell>\r\n      </TableFooter>\r\n    </Table>\n}",...Disabled.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Table-Table-stories.76f738d9.iframe.bundle.js.map