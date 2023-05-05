import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlipVertical2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlipVertical2Icon = React.forwardRef<SVGSVGElement, TablerFlipVertical2IconProps>(
	function TablerFlipVertical2Icon(props, ref) {
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
				<path d="m17 3-5 5-5-5h10" />
				<path d="m17 21-5-5-5 5h10" />
				<path d="M4 12H2" />
				<path d="M10 12H8" />
				<path d="M16 12h-2" />
				<path d="M22 12h-2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFlipVertical2Icon.displayName = "TablerFlipVertical2Icon";
}
