import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandGooglePodcastsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandGooglePodcastsIcon = React.forwardRef<SVGSVGElement, TablerBrandGooglePodcastsIconProps>(
	function TablerBrandGooglePodcastsIcon(props, ref) {
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
				<path d="M12 3v2" />
				<path d="M12 19v2" />
				<path d="M12 8v8" />
				<path d="M8 17v2" />
				<path d="M4 11v2" />
				<path d="M20 11v2" />
				<path d="M8 5v8" />
				<path d="M16 7v-2" />
				<path d="M16 19v-8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandGooglePodcastsIcon.displayName = "TablerBrandGooglePodcastsIcon";
}
