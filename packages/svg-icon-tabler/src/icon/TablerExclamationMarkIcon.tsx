import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerExclamationMarkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerExclamationMarkIcon = React.forwardRef<SVGSVGElement, TablerExclamationMarkIconProps>(
	function TablerExclamationMarkIcon(props, ref) {
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
				<path d="M12 15v-10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerExclamationMarkIcon.displayName = "TablerExclamationMarkIcon";
}
