import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerComponentsOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerComponentsOffIcon = React.forwardRef<SVGSVGElement, TablerComponentsOffIconProps>(
	function TablerComponentsOffIcon(props, ref) {
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
				<path d="M3 12l3 3l3 -3l-3 -3z" />
				<path d="M18.5 14.5l2.5 -2.5l-3 -3l-2.5 2.5" />
				<path d="M12.499 8.501l2.501 -2.501l-3 -3l-2.5 2.5" />
				<path d="M9 18l3 3l3 -3l-3 -3z" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerComponentsOffIcon.displayName = "TablerComponentsOffIcon";
}
