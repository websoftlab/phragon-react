import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAccessPointOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAccessPointOffIcon = React.forwardRef<SVGSVGElement, TablerAccessPointOffIconProps>(
	function TablerAccessPointOffIcon(props, ref) {
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
				<path d="M14.828 9.172a4 4 0 0 1 1.172 2.828" />
				<path d="M17.657 6.343a8 8 0 0 1 1.635 8.952" />
				<path d="M9.168 14.828a4 4 0 0 1 0 -5.656" />
				<path d="M6.337 17.657a8 8 0 0 1 0 -11.314" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAccessPointOffIcon.displayName = "TablerAccessPointOffIcon";
}
