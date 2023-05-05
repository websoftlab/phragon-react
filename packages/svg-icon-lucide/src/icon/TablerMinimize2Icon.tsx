import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMinimize2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMinimize2Icon = React.forwardRef<SVGSVGElement, TablerMinimize2IconProps>(
	function TablerMinimize2Icon(props, ref) {
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
				<path d="M4 14 L10 14 L10 20" />
				<path d="M20 10 L14 10 L14 4" />
				<path d="M14 10 L21 3" />
				<path d="M3 21 L10 14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMinimize2Icon.displayName = "TablerMinimize2Icon";
}
