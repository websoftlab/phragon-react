import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTallymark4IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTallymark4Icon = React.forwardRef<SVGSVGElement, TablerTallymark4IconProps>(
	function TablerTallymark4Icon(props, ref) {
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
				<path d="M6 5l0 14" />
				<path d="M10 5l0 14" />
				<path d="M14 5l0 14" />
				<path d="M18 5l0 14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTallymark4Icon.displayName = "TablerTallymark4Icon";
}
