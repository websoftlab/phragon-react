import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandApplePodcastIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandApplePodcastIcon = React.forwardRef<SVGSVGElement, TablerBrandApplePodcastIconProps>(
	function TablerBrandApplePodcastIcon(props, ref) {
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
				<path d="M18.364 18.364a9 9 0 1 0 -12.728 0" />
				<path d="M11.766 22h.468a2 2 0 0 0 1.985 -1.752l.5 -4a2 2 0 0 0 -1.985 -2.248h-1.468a2 2 0 0 0 -1.985 2.248l.5 4a2 2 0 0 0 1.985 1.752z" />
				<path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandApplePodcastIcon.displayName = "TablerBrandApplePodcastIcon";
}
