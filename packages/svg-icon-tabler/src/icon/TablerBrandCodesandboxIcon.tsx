import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandCodesandboxIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandCodesandboxIcon = React.forwardRef<SVGSVGElement, TablerBrandCodesandboxIconProps>(
	function TablerBrandCodesandboxIcon(props, ref) {
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
				<path d="M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25z" />
				<path d="M12 12l4 -2.25l4 -2.25" />
				<path d="M12 12l0 9" />
				<path d="M12 12l-4 -2.25l-4 -2.25" />
				<path d="M20 12l-4 2v4.75" />
				<path d="M4 12l4 2l0 4.75" />
				<path d="M8 5.25l4 2.25l4 -2.25" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandCodesandboxIcon.displayName = "TablerBrandCodesandboxIcon";
}
