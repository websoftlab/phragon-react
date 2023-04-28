import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPhotoSensor3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPhotoSensor3Icon = React.forwardRef<SVGSVGElement, TablerPhotoSensor3IconProps>(
	function TablerPhotoSensor3Icon(props, ref) {
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
				<path d="M17 4h1a2 2 0 0 1 2 2v1" />
				<path d="M20 17v1a2 2 0 0 1 -2 2h-1" />
				<path d="M7 20h-1a2 2 0 0 1 -2 -2v-1" />
				<path d="M4 7v-1a2 2 0 0 1 2 -2h1" />
				<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M12 18v2" />
				<path d="M4 12h2" />
				<path d="M12 4v2" />
				<path d="M20 12h-2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPhotoSensor3Icon.displayName = "TablerPhotoSensor3Icon";
}
