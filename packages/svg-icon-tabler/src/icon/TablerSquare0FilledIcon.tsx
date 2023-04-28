import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquare0FilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquare0FilledIcon = React.forwardRef<SVGSVGElement, TablerSquare0FilledIconProps>(
	function TablerSquare0FilledIcon(props, ref) {
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
				<path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005 .195v12.666c0 1.96 -1.537 3.56 -3.472 3.662l-.195 .005h-12.666a3.667 3.667 0 0 1 -3.662 -3.472l-.005 -.195v-12.666c0 -1.96 1.537 -3.56 3.472 -3.662l.195 -.005h12.666zm-6.333 5a3 3 0 0 0 -2.995 2.824l-.005 .176v4l.005 .176a3 3 0 0 0 5.99 0l.005 -.176v-4l-.005 -.176a3 3 0 0 0 -2.995 -2.824zm0 2a1 1 0 0 1 .993 .883l.007 .117v4l-.007 .117a1 1 0 0 1 -1.986 0l-.007 -.117v-4l.007 -.117a1 1 0 0 1 .993 -.883z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSquare0FilledIcon.displayName = "TablerSquare0FilledIcon";
}
