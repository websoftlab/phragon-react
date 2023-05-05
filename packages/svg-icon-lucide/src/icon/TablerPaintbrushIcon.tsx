import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPaintbrushIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPaintbrushIcon = React.forwardRef<SVGSVGElement, TablerPaintbrushIconProps>(
	function TablerPaintbrushIcon(props, ref) {
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
				<path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
				<path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
				<path d="M14.5 17.5 4.5 15" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPaintbrushIcon.displayName = "TablerPaintbrushIcon";
}
