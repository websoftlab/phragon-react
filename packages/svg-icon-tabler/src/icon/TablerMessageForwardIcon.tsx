import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMessageForwardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMessageForwardIcon = React.forwardRef<SVGSVGElement, TablerMessageForwardIconProps>(
	function TablerMessageForwardIcon(props, ref) {
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
				<path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
				<path d="M13 9l2 2l-2 2" />
				<path d="M15 11h-6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMessageForwardIcon.displayName = "TablerMessageForwardIcon";
}
