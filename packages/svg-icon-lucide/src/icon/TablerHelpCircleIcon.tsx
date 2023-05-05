import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHelpCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHelpCircleIcon = React.forwardRef<SVGSVGElement, TablerHelpCircleIconProps>(
	function TablerHelpCircleIcon(props, ref) {
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
				<path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12" />
				<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
				<path d="M12 17 L12.01 17" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHelpCircleIcon.displayName = "TablerHelpCircleIcon";
}
