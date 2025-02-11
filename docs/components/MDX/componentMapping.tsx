import SectionHeading from './renderers/SectionHeading'
import Code from './renderers/Code'
import InlineCode from './renderers/InlineCode'
import Blockquote from './renderers/Blockquote'
import RuleCard from './renderers/RuleCard'
import RuleLayout from './renderers/RuleLayout'
import ColorSwatch from '../ColorSwatch'
import IconSearch from '../IconSearch'
import {
  InlineAlert,
  Table,
  Pane,
  Paragraph,
  Strong,
  Ol,
  Ul,
  Li,
  majorScale,
  Link as EvergreenLink,
  PaneProps,
  TableProps,
  TableHeadProps,
  TextTableCellProps,
  TableRowProps,
  AlertProps,
  Alert,
  InlineAlertProps,
} from 'evergreen-ui'

const componentMapping = {
  h1: (props: any) => <SectionHeading size={800} {...props} />,
  h2: (props: any) => <SectionHeading size={700} {...props} />,
  h3: (props: any) => <SectionHeading size={600} {...props} />,
  h4: (props: any) => <SectionHeading size={500} {...props} />,
  h5: (props: any) => <SectionHeading size={300} {...props} />,
  h6: (props: any) => <SectionHeading size={200} {...props} />,
  code: (props: { className: string; metastring: string; children: any }) => <Code {...props} />,
  p: (props: any) => <Paragraph marginBottom={majorScale(3)} {...props} />,
  a: (props: any) => <EvergreenLink {...props} />,
  strong: (props: any) => <Strong {...props} />,
  ol: (props: any) => <Ol {...props} />,
  ul: (props: any) => <Ul {...props} marginTop="-16px" />,
  li: (props: any) => <Li {...props} />,
  inlineCode: (props: any) => <InlineCode {...props} />,
  Alert: (props: AlertProps) => <Alert {...props} />,
  InlineAlert: (props: InlineAlertProps) => <InlineAlert marginBottom={majorScale(3)} {...props} />,
  Pane: (props: PaneProps) => <Pane {...props} />,
  Table: (props: TableProps) => <Table {...props} />,
  TableHead: (props: TableHeadProps) => <Table.Head {...props} />,
  TableRow: (props: TableRowProps) => <Table.Row {...props} />,
  TableTextHeaderCell: (props: TextTableCellProps) => <Table.TextHeaderCell {...props} />,
  TableTextCell: (props: TextTableCellProps) => <Table.TextCell {...props} />,
  blockquote: Blockquote,
  ColorSwatch,
  IconSearch,
  RuleCard,
  RuleLayout,
}

export default componentMapping
