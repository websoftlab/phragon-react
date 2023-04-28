import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMessagesOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMessagesOffIcon = React.forwardRef<SVGSVGElement, TablerMessagesOffIconProps>(
	function TablerMessagesOffIcon(props, ref) {
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
				<path d="M3 3l18 18" />
				<path d="M11 11a1 1 0 0 1 -1 -1m0 -3.968v-2.032a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10l-3 -3h-3" />
				<path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMessagesOffIcon.displayName = "TablerMessagesOffIcon";
}
