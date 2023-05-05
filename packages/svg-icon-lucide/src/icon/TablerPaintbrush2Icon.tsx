import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPaintbrush2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPaintbrush2Icon = React.forwardRef<SVGSVGElement, TablerPaintbrush2IconProps>(
	function TablerPaintbrush2Icon(props, ref) {
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
				<path d="M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z" />
				<path d="M6 12V2h12v10" />
				<path d="M14 2v4" />
				<path d="M10 2v2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPaintbrush2Icon.displayName = "TablerPaintbrush2Icon";
}
