import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPennant2FilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPennant2FilledIcon = React.forwardRef<SVGSVGElement, TablerPennant2FilledIconProps>(
	function TablerPennant2FilledIcon(props, ref) {
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
				<path d="M14 2a1 1 0 0 1 .993 .883l.007 .117v17h1a1 1 0 0 1 .117 1.993l-.117 .007h-4a1 1 0 0 1 -.117 -1.993l.117 -.007h1v-7.351l-8.406 -3.735c-.752 -.335 -.79 -1.365 -.113 -1.77l.113 -.058l8.406 -3.736v-.35a1 1 0 0 1 1 -1z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPennant2FilledIcon.displayName = "TablerPennant2FilledIcon";
}
