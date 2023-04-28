import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandSoundcloudIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandSoundcloudIcon = React.forwardRef<SVGSVGElement, TablerBrandSoundcloudIconProps>(
	function TablerBrandSoundcloudIcon(props, ref) {
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
				<path d="M17 11h1c1.38 0 3 1.274 3 3c0 1.657 -1.5 3 -3 3l-6 0v-10c3 0 4.5 1.5 5 4z" />
				<path d="M9 8l0 9" />
				<path d="M6 17l0 -7" />
				<path d="M3 16l0 -2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandSoundcloudIcon.displayName = "TablerBrandSoundcloudIcon";
}
