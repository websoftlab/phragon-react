import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPointerUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPointerUpIcon = React.forwardRef<SVGSVGElement, TablerPointerUpIconProps>(
	function TablerPointerUpIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="M15.984 13.428l-1.206 -1.206l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l1.217 1.217" />
				<path d="M19 22v-6" />
				<path d="M22 19l-3 -3l-3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPointerUpIcon.displayName = "TablerPointerUpIcon";
}
