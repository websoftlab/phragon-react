import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCategory2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCategory2Icon = React.forwardRef<SVGSVGElement, TablerCategory2IconProps>(
	function TablerCategory2Icon(props, ref) {
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
				<path d="M14 4h6v6h-6z" />
				<path d="M4 14h6v6h-6z" />
				<path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M7 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCategory2Icon.displayName = "TablerCategory2Icon";
}
