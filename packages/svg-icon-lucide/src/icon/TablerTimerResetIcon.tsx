import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTimerResetIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTimerResetIcon = React.forwardRef<SVGSVGElement, TablerTimerResetIconProps>(
	function TablerTimerResetIcon(props, ref) {
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
				<path d="M10 2h4" />
				<path d="M12 14v-4" />
				<path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" />
				<path d="M9 17H4v5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTimerResetIcon.displayName = "TablerTimerResetIcon";
}
