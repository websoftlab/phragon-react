import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandLinktreeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandLinktreeIcon = React.forwardRef<SVGSVGElement, TablerBrandLinktreeIconProps>(
	function TablerBrandLinktreeIcon(props, ref) {
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
				<path d="M9 3l-7 12h3v5h5v-5h-2l4 -7z" />
				<path d="M15 3l7 12h-3v5h-5v-5h2l-4 -7z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandLinktreeIcon.displayName = "TablerBrandLinktreeIcon";
}
