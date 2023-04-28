import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerExclamationMarkOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerExclamationMarkOffIcon = React.forwardRef<SVGSVGElement, TablerExclamationMarkOffIconProps>(
	function TablerExclamationMarkOffIcon(props, ref) {
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
				<path d="M12 19v.01" />
				<path d="M12 15v-3m0 -4v-3" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerExclamationMarkOffIcon.displayName = "TablerExclamationMarkOffIcon";
}
