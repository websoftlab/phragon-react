import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSignLeftFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSignLeftFilledIcon = React.forwardRef<SVGSVGElement, TablerSignLeftFilledIconProps>(
	function TablerSignLeftFilledIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				fill="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				strokeWidth={0}
				stroke="none"
			>
				<path d="M14 2a1 1 0 0 1 .993 .883l.007 .117v2h3a1 1 0 0 1 .993 .883l.007 .117v5a1 1 0 0 1 -.883 .993l-.117 .007h-3v8h1a1 1 0 0 1 .117 1.993l-.117 .007h-4a1 1 0 0 1 -.117 -1.993l.117 -.007h1v-8h-5a1 1 0 0 1 -.694 -.28l-.087 -.095l-2 -2.5a1 1 0 0 1 -.072 -1.147l.072 -.103l2 -2.5a1 1 0 0 1 .652 -.367l.129 -.008h5v-2a1 1 0 0 1 1 -1z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSignLeftFilledIcon.displayName = "TablerSignLeftFilledIcon";
}
