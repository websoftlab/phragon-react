import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandRadixUiIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandRadixUiIcon = React.forwardRef<SVGSVGElement, TablerBrandRadixUiIconProps>(
	function TablerBrandRadixUiIcon(props, ref) {
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
				<path d="M16.5 5.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
				<path d="M6 3h5v5h-5z" />
				<path d="M11 11v10a5 5 0 0 1 -.217 -9.995l.217 -.005z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandRadixUiIcon.displayName = "TablerBrandRadixUiIcon";
}
