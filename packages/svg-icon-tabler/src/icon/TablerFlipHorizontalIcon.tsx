import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlipHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlipHorizontalIcon = React.forwardRef<SVGSVGElement, TablerFlipHorizontalIconProps>(
	function TablerFlipHorizontalIcon(props, ref) {
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
				<path d="M3 12l18 0" />
				<path d="M7 16l10 0l-10 5l0 -5" />
				<path d="M7 8l10 0l-10 -5l0 5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFlipHorizontalIcon.displayName = "TablerFlipHorizontalIcon";
}
