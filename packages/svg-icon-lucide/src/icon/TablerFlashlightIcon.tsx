import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlashlightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlashlightIcon = React.forwardRef<SVGSVGElement, TablerFlashlightIconProps>(
	function TablerFlashlightIcon(props, ref) {
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
				<path d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z" />
				<path d="M6 6 L18 6" />
				<path d="M12 12 L12 12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFlashlightIcon.displayName = "TablerFlashlightIcon";
}
